// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

library Utils{
	function etherToWei(uint price) public pure returns(uint){
		return price * 1 ether;
	}
}

