import { Image, Input, Flex, InputRightElement, InputGroup } from "@chakra-ui/react"
import patternDesktop from './images/pattern-bg-desktop.png'
import iconBtn from './images/icon-arrow.svg'

function App() {
  return (
    <Flex direction={"column"} align={"center"} pos="relative" justify={"space-between"}>
      <Image src={patternDesktop} alt='Image de fond'/>
      <Flex direction={"column"} align={"center"} width='80%' pos="absolute" top="16px">
        <h1>IP Address Tracker</h1>
        <InputGroup mb={'30px'} w='60%' >
          <label for='IPaddress'/>
          <Input placeholder="Search for any IP address or domain" bg='white' borderRadius='lg'/>
          <InputRightElement width='2.25rem'>
              <button>{iconBtn}</button>   
          </InputRightElement>
        </InputGroup>
        <Flex direction={"row"} justify={"space-between"} w='100%' bg='white' p={6} borderRadius='lg'>
          <div>
            <h2>IP ADDRESS</h2>
            <p>192.212.174.101</p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>Brooklyn</p>
          </div>
          <div>
            <h2>TIMEZONE</h2>
            <p>xx</p>
          </div>
          <div>
            <h2>ISP</h2>
            <p>xx</p>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
