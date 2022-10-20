import { Button } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import { pink } from "@mui/material/colors";
import SearchAppBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import CenterPage from "./components/Home";
import { Route, Routes } from "react-router-dom"
import FullPage from "./components/FullPage";

function App() {
  return (
    <FullPage />
  );
}

export default App;
