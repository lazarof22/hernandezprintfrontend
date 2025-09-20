import { Box } from "@mui/material";
import Navbar from "../components/NavBar";
import SocialButton from '../components/SocialButton';
import SearchInput from "../components/SearchInput";

export default function SeriesPage() {
    return (
        <>
            <Box sx={{}}>
                <Navbar />
            </Box>
            <Box sx={{ mt: 1, justifyItems: 'center' }}>
                <SearchInput />
            </Box>
            <Box sx={{ mb: "20px", width: "100%" }}>
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