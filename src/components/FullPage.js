
import SearchAppBar from "./navbar";
import Sidebar from "./sidebar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
import Archive from "./Archive";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function FullPage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [menu, setMenu] = useState(false)
    const [fakejson, setFakeJson] = useState("")
    const UrlList = "http://localhost:3000/db/fakeJson1.json"


    const handleMenu = () =>{
        setMenu(!menu)
    } 

    useEffect(() => {
        fetch(UrlList)
        .then(response => response.json())
        .then(data => setFakeJson(data))
      },[])

    return (
        <div className="App">
            <Navbar
            handleMenu={handleMenu}
            selectedIndex={selectedIndex}
            />
            <div style={{display:'flex'}}>
                {menu === true && <Sidebar 
                                    handleMenu={handleMenu} 
                                    selectedIndex={selectedIndex} 
                                    setSelectedIndex={setSelectedIndex}
                                    />}
                    <Routes>
                        <Route path="/" element={fakejson && <Home list={fakejson}/>} />
                        <Route path="/archive" element={fakejson && <Archive list={fakejson} />} />
                    </Routes>
            </div>
        </div>
    )
}