import { Image, Input, Flex, InputRightElement, InputGroup, Box, FormLabel } from "@chakra-ui/react"
import patternDesktop from './images/pattern-bg-desktop.png'
import patternMobile from './images/pattern-bg-mobile.png'
import iconBtn from './images/icon-arrow.svg'
import iconLocation from './images/icon-location.svg'
import axios from 'axios'
import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: iconLocation,
    iconRetinaUrl: iconLocation
});

export { iconPerson };

const IP_REGEX = /^(?:\d{1,3}\.){3}\d{1,3}$/;

function App() {

  const [ipCode, setIpCode] = useState('')
  const [ipInfos, setIpInfos] = useState(null)

  const getIP = async () => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ipCode}?fields=status,message,continent,region,city,zip,timezone,offset,isp,query,lon,lat`);
      setIpInfos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIP();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ipResult = IP_REGEX.test(ipCode);

    if (!ipResult) {
      return;
    }
    setIpInfos()
    getIP();
  };

  const today = new Date();
  const todayInSeconds = today.getUTCSeconds();
  const timezone = (todayInSeconds - ipInfos?.offset)/3600

  return (
    <Flex direction={"column"} align={"center"} pos="relative" justify={"space-between"}>
      <Image w='100vw' h='227px' src={patternDesktop} alt='Image de fond' pos='fixed' display={["none", "block"]}/>
      <Image w='100vw' h='227px' src={patternMobile} alt='Image de fond' pos='fixed' display={["block", "none"]}/>
      <Flex direction={"column"} align={"center"} width='80%' pos="fixed" top={["16px","48px"]}>
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup mb={'30px'}>
            <FormLabel display={'none'}/>
            <Input type="text" placeholder={"Search for any IP address or domain"} bg='white' borderRadius='lg' cursor={"pointer"} value={ipCode} onChange={(e) => setIpCode(e.target.value)}/>
            <InputRightElement width='2.25rem'>
                <button type="submit">
                  <Image src={iconBtn} alt='icon' ml={'12px'}/>
                </button>   
            </InputRightElement>
          </InputGroup>
        </form>
        <Flex direction={["column", "row"]} justify={["center","space-between"]} align={['center', 'flex-start']}  w={['100%','fit-content']} bg='white' p={6} borderRadius='lg' columnGap={'10px'}>
          <Flex direction={["column"]} align={['center', 'stretch']} pl={['0']} pb={['14px', '0']}>
            <h2>IP ADDRESS</h2>
            <p>{ipInfos?.query}</p>
          </Flex>
          <Flex direction={["column"]} align={['center', 'stretch']} pl={['0','20px']} pb={['14px', '0']} borderLeft={['none', '1px solid hsl(0, 0%, 59%, 0.41)']}>
            <h2>LOCATION</h2>
            <p>{ipInfos?.city}, {ipInfos?.region} {ipInfos?.zip} </p>
          </Flex>
          <Flex direction={["column"]} align={['center', 'stretch']} pl={['0','20px']} pb={['14px', '0']} borderLeft={['none', '1px solid hsl(0, 0%, 59%, 0.41)']}>
            <h2>TIMEZONE</h2>
            <p>UTC {Math.round(timezone)}:00</p>
          </Flex>
          <Flex direction={["column"]} align={['center', 'stretch']} pl={['0','20px']} borderLeft={['none', '1px solid hsl(0, 0%, 59%, 0.41)']}>
            <h2>ISP</h2>
            <p>{ipInfos?.isp}</p>
          </Flex>
        </Flex>
      </Flex>
      <Box id='map' bg="gray" w='100%' h='100%' pos='fixed' top='227' zIndex={-9999}>
        {ipInfos && (
        <MapContainer center={[ipInfos?.lat, ipInfos?.lon]} zoom={13} zoomControl={false} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[ipInfos?.lat, ipInfos?.lon]} icon={iconPerson} >
          </Marker>
        </MapContainer>
      )}
      </Box>
    </Flex>
  );
}

export default App;