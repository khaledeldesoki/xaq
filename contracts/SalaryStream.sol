// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SalaryStream {
    address public employer;
    address public employee;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public salaryRate;
    uint256 public lastWithdrawTime;

    modifier onlyEmployee() {
        require(msg.sender == employee, "Only the employee can call this function");
        _;
    }

    constructor(address _employee, uint256 _salaryRate, uint256 _duration) {
        employer = msg.sender;
        employee = _employee;
        salaryRate = _salaryRate;
        startTime = block.timestamp;
        endTime = block.timestamp + _duration;
        lastWithdrawTime = block.timestamp;
    }

    function withdraw() public onlyEmployee {
        require(block.timestamp <= endTime, "Salary streaming has ended");

        uint256 amount = salaryRate * (block.timestamp - lastWithdrawTime);
        lastWithdrawTime = block.timestamp;

        payable(employee).transfer(amount);
    }

    receive() external payable {}
}