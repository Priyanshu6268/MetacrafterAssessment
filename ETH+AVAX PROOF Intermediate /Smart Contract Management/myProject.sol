// SPDX-License-Identifier: MIT
//For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.
pragma solidity ^0.8.0;

contract SimpleContract {
    string private message;

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
