
import SearchAppBar from "../navbar";
import Sidebar from "../sidebar/index";
import Home from "../home/index";
import { Route, Routes } from "react-router-dom"
import Archive from "../archive/Index";
import { useState, useEffect } from "react";
import Navbar from "../navbar/index";

export default function FullPage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [menu, setMenu] = useState(false)
    const [fakejson, setFakeJson] = useState("")
    const baseUrl = "http://localhost:3000/db/fakeJson1.json"


    const handleMenu = () =>{
        setMenu(!menu)
    } 
    

    useEffect(() => {
        fetch(baseUrl)
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
                {menu === true &&   <Sidebar 
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