const Utils = artifacts.require("Utils");
const ReportContract = artifacts.require("ReportContract");

module.exports = function(deployer) {
  deployer.deploy(Utils);
  deployer.link(Utils, ReportContract);
  deployer.deploy(ReportContract, ['0xb2240DA2c924fBd5ee23140615a3d8E43B0FF233', '0xb2240DA2c924fBd5ee23140615a3d8E43B0FF233'], ['0xb2240DA2c924fBd5ee23140615a3d8E43B0FF233', '0xb2240DA2c924fBd5ee23140615a3d8E43B0FF233'],['1','2'],'abcdefghijklmnoup');
};
