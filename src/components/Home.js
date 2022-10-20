

import * as React from 'react';
/* import Box from '@mui/joy/Box'; */
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Button, IconButton, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

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


export default function Home( {files} ){

    return (
        <div style={{position: 'absolute',
        top: '90px',
        left: '15px',}}>
            <DividerInModalDialog files={files} />
        </div>
        
        
    )
}
function DividerInModalDialog({files}) {


    const [openImport, setOpenImport] = React.useState(false)
    
    return (
        <>
        <Box
            sx={{
            px: 2,
            py: 1.5,
            m: 'calc(-1 * var(--ModalDialog-padding))',
            mt: 0,
            backgroundColor: 'background.paper', 
            borderBottomLeftRadius: 'var(--ModalDialog-radius)',
            borderBottomRightRadius: 'var(--ModalDialog-radius)',
            textAlign: 'left',
            border: '1px solid lightGrey',
            borderRadius: '7px',
            boxShadow: "4px 4px 6px #D3D3D3",
            width: '300px',
            height: '200px',
            maxWidth: '85%'  
            }}
        >
            <Typography fontSize="lg" fontWeight="lg" color='primary'>
            Last import
        </Typography>
        <Divider  sx={{ my: 1.5, backgroundColor:'#D3D3D3' }} />
        <Typography level="body2" fontWeight="lg" mt="15px">
            {files[0]['title']}
        </Typography>
        <Divider  sx={{ my: 1.5 }} />
        <Typography level="body2">
            {files[0]['content']}
        </Typography>
            <Button   sx={{
                position: 'relative',
                top:'32%', 
                left:'74%',
                }}
                onClick={e => setOpenImport(!openImport)}
                >Expand</Button>
        </Box>
        <Modal
            open={openImport}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >          
            <Box sx={style}>
            <IconButton
                aria-label="close"
                onClick={e => setOpenImport(!openImport)}
                sx={{
                    position: 'absolute',
                    right: 7,
                    top: 7,
                }}
                >
                <CloseIcon />
            </IconButton> 
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {files[0]['title']}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {files[0]['content']}
                </Typography>
            </Box>
        </Modal>
        </> 
    );
}