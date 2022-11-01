

import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';


const style = {
    backgroundColor:'background.paper',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '70vw',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Home({list}) {
    
    const last = list.length -1


    return (
        <Box
            sx={{
            px: 2,
            py: 1.5,
            m: {xs: "10% auto", sm:"5% auto"},
            backgroundColor: 'background.paper', 
            borderBottomLeftRadius: 'var(--ModalDialog-radius)',
            borderBottomRightRadius: 'var(--ModalDialog-radius)',
            textAlign: 'left',
            border: '1px solid lightGrey',
            borderRadius: '7px',
            boxShadow: "4px 4px 6px #D3D3D3",
            width: {xs:'80%', sm:'40vw'},
            maxWidth: '80%'  
            }}
        >
        <Typography fontSize="lg" fontWeight="lg" color='primary' sx={{mt:1}}>
            Last import
        </Typography>
        <Divider  sx={{ my: 1.5, backgroundColor:'#D3D3D3' }} />
        <Typography level="body2" fontWeight="lg" mt="15px" >
            {`Import ID: ${list[last]['id']}`}
        </Typography>
        <Divider  sx={{ my: 1.5 }} />
        <Typography level="body2">
            {`Number of files: ${list[last]['file_number']}`}
        </Typography>
        <Divider  sx={{ my: 1.5 }} />
        <Typography level="body2">
            {"Files:"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1, mb:1 }}>
            {list[last]["nome_file"].map(nome => 
                    <li ><a href="">{nome}</a></li>)}
        </Typography>
        </Box>
    );
}