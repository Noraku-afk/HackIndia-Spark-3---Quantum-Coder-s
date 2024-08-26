// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ticketing {
    struct Event {
        string name;
        uint256 date;
        uint256 price;
        uint256 availableTickets;
        address owner;
    }

    struct Ticket {
        uint256 eventId;
        address owner;
        string email;
        uint256 uniqueId;
    }

    Event[] public events;
    Ticket[] public tickets;
    mapping(address => uint256) public userTicketCount;
    mapping(uint256 => string) public qrCodes;

    event TicketPurchased(address indexed buyer, uint256 eventId, uint256 ticketId);
    event TicketTransferred(uint256 ticketId, address from, address to);

    function createEvent(string memory _name, uint256 _date, uint256 _price, uint256 _availableTickets) public {
        events.push(Event(_name, _date, _price, _availableTickets, msg.sender));
    }

    function buyTicket(uint256 _eventId, string memory _email) public payable {
        Event storage myEvent = events[_eventId];

        require(myEvent.availableTickets > 0, "No tickets available");
        require(msg.value >= myEvent.price, "Insufficient payment");
        require(userTicketCount[msg.sender] < 3, "Cannot purchase more than 3 tickets");

        uint256 ticketId = tickets.length;
        uint256 uniqueId = uint256(keccak256(abi.encodePacked(_email, block.timestamp, ticketId)));
        tickets.push(Ticket(_eventId, msg.sender, _email, uniqueId));

        qrCodes[uniqueId] = _generateQRCode(uniqueId);

        userTicketCount[msg.sender] += 1;
        myEvent.availableTickets -= 1;

        payable(myEvent.owner).transfer(msg.value);

        emit TicketPurchased(msg.sender, _eventId, ticketId);
    }

    function transferTicket(uint256 _ticketId, address _to) public {
        Ticket storage myTicket = tickets[_ticketId];
        require(myTicket.owner == msg.sender, "You do not own this ticket");

        myTicket.owner = _to;
        userTicketCount[msg.sender] -= 1;
        userTicketCount[_to] += 1;

        emit TicketTransferred(_ticketId, msg.sender, _to);
    }

    function getEvent(uint256 _eventId) public view returns (string memory, uint256, uint256, uint256, address) {
        Event memory myEvent = events[_eventId];
        return (myEvent.name, myEvent.date, myEvent.price, myEvent.availableTickets, myEvent.owner);
    }

    function getUserTickets(address _user) public view returns (Ticket[] memory) {
        uint256 count = userTicketCount[_user];
        Ticket[] memory userTickets = new Ticket[](count);
        uint256 index = 0;

        for (uint256 i = 0; i < tickets.length; i++) {
            if (tickets[i].owner == _user) {
                userTickets[index] = tickets[i];
                index++;
            }
        }
        return userTickets;
    }

    function _generateQRCode(uint256 uniqueId) internal pure returns (string memory) {
        return string(abi.encodePacked("QR-", uniqueId));
    }

    function getQRCode(uint256 ticketId) public view returns (string memory) {
        Ticket memory myTicket = tickets[ticketId];
        return qrCodes[myTicket.uniqueId];
    }
}