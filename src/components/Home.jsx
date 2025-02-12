
import { Box } from "@chakra-ui/react";
import vids from "../assets/vid/The last of us.mp4";
const Home = () => {
  return (
    <>
      <Box className="Video">
        <video src={vids} autoPlay muted loop></video>
      </Box>
    </>
  );
};

export default Home;
