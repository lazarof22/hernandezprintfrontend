import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminAddPage from "./pages/AdminAddPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AnimesPage from "./pages/AnimesPage";
import MoviesPage from "./pages/MoviesPage";
import PremierePage from "./pages/PremieresPage";
import PrintPage from "./pages/PrintPage";
import SagasPage from "./pages/SagasPage";
import SeriesPage from "./pages/SeriesPage";
import ShopPage from "./pages/ShopPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/adminaddpage" element={<AdminAddPage />} />
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/registerpage" element={<RegisterPage/>}/>
      <Route path="/animepage" element={<AnimesPage/>}/>
      <Route path="/moviepage" element={<MoviesPage/>}/>
      <Route path="/premierepage" element={<PremierePage/>}/>
      <Route path="/printpage" element={<PrintPage/>}/>
      <Route path="/sagaspage" element={<SagasPage/>}/>
      <Route path="/seriespage" element={<SeriesPage/>}/>
      <Route path="/shoppage" element={<ShopPage/>}/>
    </Routes>
  );
}
