import { Image, Input, Flex, InputRightElement, InputGroup, Box } from "@chakra-ui/react"
import patternDesktop from './images/pattern-bg-desktop.png'
import iconBtn from './images/icon-arrow.svg'

function App() {
  return (
    <Flex direction={"column"} align={"center"} pos="relative" justify={"space-between"}>
      <Image w='100vw' h='227px' src={patternDesktop} alt='Image de fond' pos='fixed'/>
      <Flex direction={"column"} align={"center"} width='80%' pos="fixed" top="66px">
        <h1>IP Address Tracker</h1>
        <InputGroup mb={'30px'} w='60%'>
          <label for='IPaddress'/>
          <Input placeholder="Search for any IP address or domain" bg='white' borderRadius='lg' cursor={"pointer"}/>
          <InputRightElement width='2.25rem'>
              <button>
                <Image src={iconBtn} alt='icon' ml={'12px'}/>
              </button>   
          </InputRightElement>
        </InputGroup>
        <Flex direction={"row"} justify={"space-between"} w='100%' bg='white' p={6} borderRadius='lg'>
          <Box>
            <h2>IP ADDRESS</h2>
            <p>192.212.174.101</p>
          </Box>
          <Box className='boxInfos'>
            <h2>LOCATION</h2>
            <p>Brooklyn</p>
          </Box>
          <Box className='boxInfos'>
            <h2>TIMEZONE</h2>
            <p>xx</p>
          </Box>
          <Box className='boxInfos'>
            <h2>ISP</h2>
            <p>xx</p>
          </Box>
        </Flex>
      </Flex>
      <Box bg="gray" w='100%' h='80%' pos='fixed' bottom='0' zIndex={-9999}></Box>
    </Flex>
  );
}

export default App;
