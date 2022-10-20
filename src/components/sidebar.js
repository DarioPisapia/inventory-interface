import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

import { useNavigate } from "react-router-dom"


export default function Sidebar({handleMenu, selectedIndex, setSelectedIndex}) {

    const navigate = useNavigate()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index) 
    };


    return (
        <Box sx={{ 
            width: {xs:'100%', sm:'20%'},
            height: '100vh', 
            maxWidth: 260, 
            bgcolor: 'background.paper', 
            boxShadow: "4px 0px 6px #D3D3D3",
            zIndex:1
            }}>
        <List component="nav" aria-label="menu folders" >
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => {
                    navigate('/')
                    handleListItemClick(event, 0)
                    handleMenu()
                }}
                sx={{color: selectedIndex===0 ? '#2196f3' : '#4D4D4D'}}
            >
            <ListItemIcon>
                <HomeIcon color={selectedIndex===0 ? 'primary' : '#4D4D4D' }/>
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => {
                navigate('/archive')
                handleListItemClick(event, 1)
                handleMenu()
            }}
            sx={{color: selectedIndex===1 ? '#2196f3' : '#4D4D4D'}}
            >
            <ListItemIcon>
                <DocumentScannerIcon color={selectedIndex===1 ? 'primary' : '#4D4D4D' } />
            </ListItemIcon>
            <ListItemText primary="Archive" />
            </ListItemButton>
    </List>
        </Box>
    );
    }
