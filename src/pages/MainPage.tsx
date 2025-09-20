import { Box } from "@mui/material";
import Navbar from "../components/NavBar";
import TabsPanel from "../components/Tabs";
import SocialButton from '../components/SocialButton';
import SearchInput from "../components/SearchInput";

export default function MainPage() {
  return (
    <>
      <Box sx={{}}>
        <Navbar />
      </Box>
      <Box sx={{ mt: 1, justifyItems: 'center' }}>
        <SearchInput />
      </Box>
      <Box sx={{ mb: "20px", width: "100%" }}>
        <TabsPanel />
      </Box>
      <Box sx={{ bgcolor: 'grey.900', p: 1, justifyItems: "center" }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <SocialButton type={"instagram"} />
          <SocialButton type={"facebook"} />
          <SocialButton type={"whatsapp"} />
          <SocialButton type={"telegram"} />
        </Box>
      </Box>
    </>
  );
}