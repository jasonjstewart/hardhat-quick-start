import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {

  const GLDToken: ContractFactory = await ethers.getContractFactory("GLDToken")
  const gLDToken: Contract = await GLDToken.deploy(100)

  await gLDToken.deployed()
  console.log(`GLDToken deployed to: ${gLDToken.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
