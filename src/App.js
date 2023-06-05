import { Image, Input, Flex, InputRightElement, InputGroup, Box, FormLabel } from "@chakra-ui/react"
import patternDesktop from './images/pattern-bg-desktop.png'
import iconBtn from './images/icon-arrow.svg'
import axios from 'axios'
import { useState, useEffect } from "react"

const IP_REGEX = /^(?:\d{1,3}\.){3}\d{1,3}$/;

function App() {

  const [ipCode, setIpCode] = useState('')
  const [ipInfos, setIpInfos] = useState('')

  const getIP = async () => {
      try {
        const response = await axios.get(`http://ip-api.com/json/${ipCode}?fields=status,message,continent,region,city,zip,timezone,offset,isp,query`);
        setIpInfos(response.data)
      } catch (error) {
        console.error(error);
      }
    }


  useEffect(() => {
    getIP()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const ipResult = IP_REGEX.test(ipCode)

    if (!ipResult){
      return
    }
   getIP()
  }

  console.log(ipInfos)

  

  return (
    <Flex direction={"column"} align={"center"} pos="relative" justify={"space-between"}>
      <Image w='100vw' h='227px' src={patternDesktop} alt='Image de fond' pos='fixed'/>
      <Flex direction={"column"} align={"center"} width='80%' pos="fixed" top="66px">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup mb={'30px'}>
            <FormLabel/>
            <Input type="text" placeholder="Search for any IP address or domain" bg='white' borderRadius='lg' cursor={"pointer"} value={ipCode} onChange={(e) => setIpCode(e.target.value)}/>
            <InputRightElement width='2.25rem'>
                <button type="submit">
                  <Image src={iconBtn} alt='icon' ml={'12px'}/>
                </button>   
            </InputRightElement>
          </InputGroup>
        </form>
        
        <Flex direction={"row"} justify={"space-between"} w='100%' bg='white' p={6} borderRadius='lg'>
          <Box>
            <h2>IP ADDRESS</h2>
            <p>{ipInfos.query}</p>
          </Box>
          <Box className='boxInfos'>
            <h2>LOCATION</h2>
            <p>{ipInfos.city}, {ipInfos.region} <br/> {ipInfos.zip} </p>
          </Box>
          <Box className='boxInfos'>
            <h2>TIMEZONE</h2>
            <p>UTC {ipInfos.offset}</p>
          </Box>
          <Box className='boxInfos'>
            <h2>ISP</h2>
            <p>{ipInfos.isp}</p>
          </Box>
        </Flex>
      </Flex>
      <Box bg="gray" w='100%' h='80%' pos='fixed' bottom='0' zIndex={-9999}></Box>
    </Flex>
  );
}

export default App;
