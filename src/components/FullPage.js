
import SearchAppBar from "./navbar";
import Sidebar from "./sidebar";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Archive from "./Archive";
import { useState } from "react";

export default function FullPage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [menu, setMenu] = useState(false)

    const handleMenu = () =>{
        setMenu(!menu)
    }

    const files = [
        {title: 'import 1', content: 'contenuto 1'}, 
        {title: 'import 42', content: 'contenuto 2'}, 
        {title: 'import 3ciao', content: 'contenuto 3'}
    ] /* questo è solo un esempio, probabilmente qui andranno i json
e ricaverò i dati da questi...o almeno spero sia così... */

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
                        <Route path="/" element={<Home files={files}/>} />
                        <Route path="/archive" element={<Archive files={files}/>} />
                    </Routes>
            </div>
        </div>
    )
}