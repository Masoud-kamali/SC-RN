// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
pragma experimental ABIEncoderV2;


import "./Utils.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract ReportContract{

    using Utils for *;

    address private owner;

    address[] private verifiedUsers;
    address[] public selectedUsers;
    address[] public examinedUsers;

    struct ReportProfile {
        address reportId;
        string[] location;
        string content;
        int status;
        int confirmed;
    }


    mapping(address => ReportProfile) public report;


    modifier isOwner() {
        require(msg.sender == owner, 'The address is not owner !!');
        _;
    }


//    modifier isSelectedUser() {
//        require(msg.sender == owner, 'The address is not owner !!');
//        _;
//    }

    event reportStatus(
        address reportId,
        int status
    );

    event assignedReport(
        address reportId,
        string[] location,
        string content,
        int status,
        int confirmed
    );

    // set information to report

    constructor(address[] memory _verifiedUsers, address[] memory _selectedUsers, string[] memory _reportLocation, string memory _contentHash) public {

        owner= msg.sender;
        verifiedUsers = _verifiedUsers;
        selectedUsers = _selectedUsers;
        report[address(this)].reportId = address(this);
        report[address(this)].location = _reportLocation;
        report[address(this)].content = _contentHash;
        report[address(this)].status = 0;
        report[address(this)].confirmed = 0;
    }

    // get selectedUsers boolean with senderAddress

    function isSelectedUser(address _userAddress) public returns (address) {

        uint selectUsersArrayLength = selectedUsers.length;

        for (uint i = 0; i < selectUsersArrayLength; i++) {

            if(_userAddress == selectedUsers[i]){

                emit assignedReport(address(this), report[address(this)].location, report[address(this)].content, report[address(this)].status, report[address(this)].confirmed);
            }
        }
        return _userAddress;
    }

    // get content of the report

    function getContentSelectedUser(address _userAddress, address _reportAddress) public returns (address) {

        uint selectUsersArrayLength = selectedUsers.length;

        for (uint i = 0; i < selectUsersArrayLength; i++) {

            if(_userAddress == selectedUsers[i]){

                emit assignedReport(report[_reportAddress].reportId, report[_reportAddress].location, report[_reportAddress].content, report[_reportAddress].status, report[_reportAddress].confirmed);
            }
        }
        return _userAddress;
    }

    // send content to report

    function sendContentToReport(address _userAddress, address _reportAddress, string memory _contentHash) public returns (bool){

        uint selectUsersArrayLength = selectedUsers.length;

        for (uint i = 0; i < selectUsersArrayLength; i++) {

                if(_userAddress == selectedUsers[i]){

                    report[_reportAddress].content = _contentHash;
                    report[_reportAddress].status = 1;
                    emit assignedReport(report[_reportAddress].reportId, report[_reportAddress].location, report[_reportAddress].content, report[_reportAddress].status, report[_reportAddress].confirmed);

                    return false;
                }
        }

        return true;

    }


    // set examinedUsers

    function setExaminedUsers(address _reportAddress, address[] memory _examinedAddress) public returns(bool){

        examinedUsers = _examinedAddress;
        report[_reportAddress].status = 2;

        emit assignedReport(report[_reportAddress].reportId, report[_reportAddress].location, report[_reportAddress].content, report[_reportAddress].status, report[_reportAddress].confirmed);

        return true;
    }


    // get content from report

    function getContentExaminedUser(address _userAddress) public returns (address) {

        uint examinedUsersArrayLength = examinedUsers.length;

        for (uint i = 0; i < examinedUsersArrayLength; i++) {

            if(_userAddress == examinedUsers[i]){

                emit assignedReport(address(this), report[address(this)].location, report[address(this)].content, report[address(this)].status, report[address(this)].confirmed);
            }
        }
        return _userAddress;
    }


    // confirm or reject the reports from examinedUsers

    function confirmReport(address _userAddress, address _reportAddress) public returns (bool){

        uint examinedUsersArrayLength = examinedUsers.length;

        for (uint i = 0; i < examinedUsersArrayLength; i++) {

            if(_userAddress == examinedUsers[i]){

                report[_reportAddress].confirmed = report[_reportAddress].confirmed + 1;
                emit assignedReport(report[_reportAddress].reportId, report[_reportAddress].location, report[_reportAddress].content, report[_reportAddress].status, report[_reportAddress].confirmed);

                return false;
            }
        }

        return true;

    }


    // finish the contract


    function removeContract(address _userAddress, address _reportAddress) public returns (bool){

        report[_reportAddress].status = 3;

        emit assignedReport(report[_reportAddress].reportId, report[_reportAddress].location, report[_reportAddress].content, report[_reportAddress].status, report[_reportAddress].confirmed);

        return true;
    }

}
