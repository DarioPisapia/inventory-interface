
import SearchAppBar from "./navbar";
import Sidebar from "./sidebar";
import Home from "./Home";
import { Route, Routes, BrowserRouter, json } from "react-router-dom"
import Archive from "./Archive";
import Prova from "./Archive"
import { useState, useEffect } from "react";

export default function FullPage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [menu, setMenu] = useState(false)
    const [fakejson, setFakeJson] = useState("")
    const baseUrl = "http://localhost:3000/db/fakeJson1.json"


    const handleMenu = () =>{
        setMenu(!menu)
    } 
   /*  const importList = () => {
         fetch(baseUrl).then(r => r.json()).then((j) => setFakeJson(j))
    } */
    

    useEffect(() => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => setFakeJson(data))
      },[])

    return (
        <div className="App">
            <SearchAppBar 
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
                        <Route path="/archive" element={<Archive list={fakejson} />} />
                    </Routes>
            </div>
        </div>
    )
}