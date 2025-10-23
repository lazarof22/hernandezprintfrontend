import { AppBar, Box } from "@mui/material";
import SocialButton from "./SocialButton";

export default function SubNavBar() {
    return (
        <>
          <AppBar sx={{ top: 'auto', bottom: 0 }}>
            <Box sx={{ bgcolor: 'grey.900', p: 1, justifyItems: "center" }}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <SocialButton type={"instagram"} />
                    <SocialButton type={"facebook"} />
                    <SocialButton type={"whatsapp"} />
                    <SocialButton type={"telegram"} />
                </Box>
            </Box>
         </AppBar>
            
        </>
    );
}