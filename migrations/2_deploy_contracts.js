const SalaryStream = artifacts.require("SalaryStream");

module.exports = function (deployer) {
  const employeeAddress = "0xYourEmployeeAddress";
  const salaryRate = web3.utils.toWei("0.01", "ether"); // 0.01 ETH per second
  const duration = 60 * 60 * 24 * 30; // 30 days

  deployer.deploy(SalaryStream, employeeAddress, salaryRate, duration);
};