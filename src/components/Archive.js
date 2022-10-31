import {Box, Stack, Button, Pagination, Modal, Typography, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import usePagination from '@mui/material/usePagination';
import { useState } from "react";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '70vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Archive () {
    const [fakejson, setFakeJson] = useState("")

    const listImport = []
    const baseUrl = "http://localhost:3000/db/fakeJson1.json"

    /* axios.get(baseUrl)
    .then(res => setFakeJson(res.data)) */
    

    fetch(baseUrl).then(r => r.json()).then((j) => setFakeJson(j))
    
    for (let i = 0; i<fakejson.length ;  i++){
        listImport.push(
        <ListOfImport  i={i} fakejson={fakejson} /> )
    }  

    return(
        <Box sx={{ width: '100%' }}>
           <Stack spacing={2} justifyContent="center" alignItems="center" mt={4}>   

            <div>This is the import's archive</div>
            
            {listImport}
            </Stack> 
        </Box>
    )
}

function ListOfImport ({i, fakejson}) {
    const [modalOpen, setModalOpen] = useState(false)

        return (
                <>
                <Button variant="outlined" onClick={e => setModalOpen(!modalOpen)}>
                    {`id: ${fakejson[i]["id"]} number of file: ${fakejson[i]["number of file"]}`}
                </Button> 
                <Modal
                open={modalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                            
                <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={e => setModalOpen(!modalOpen)}
                    sx={{
                        position: 'absolute',
                        right: 7,
                        top: 7,
                    }}
                    >
                    <CloseIcon />
                </IconButton> 
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {fakejson[i]["id"]}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {fakejson[i]["nome_file"].map(nome => 
                            <li><a href="">{nome}</a></li>)}
                    </Typography>
                </Box>
            </Modal>      
            </>    
    )         
}



