import { Box } from "@mui/material";
import AddCardAudioVisual from "../components/AddCardAudioVisual";
import AddCardService from "../components/AddCardService";
import AddCardShopProduct from "../components/AddCardShopProduct";
import AdminNavbar from "../components/AdminNavBar";

export default function AdminAddPage() {
    return (
        <>
            <AdminNavbar />
            <Box sx={{display:'flex'}}>
                <AddCardAudioVisual />
                <AddCardService />
                <AddCardShopProduct />
            </Box>
        </>

    );
}