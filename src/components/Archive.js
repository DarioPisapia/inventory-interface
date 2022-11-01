import {Box, Stack, Button, Modal, Typography, IconButton, Divider} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
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


export default function Archive ( {list} ) {

    const [order, setOrder] = useState("reverse")
    const listImport = []


    /* axios.get(baseUrl)
    .then(res => setFakeJson(res.data)) */
  
    if(order === "reverse"){
        for (let i = list.length - 1; i>= 0 ;  i--){
            listImport.push(
            <ListOfImport  i={i} list={list} /> )
            }  
    }
    if (order === "forward"){
        for (let i = 0; i < list.length ;  i++){
            listImport.push(
            <ListOfImport  i={i} list={list} /> )
            }   
    }
      
    const hadleOrder = () => {
        order === "reverse" ? setOrder("forward") : setOrder("reverse") 
    }

    return(
        <Box sx={{ width: '100%' }}>
           <Stack spacing={2} justifyContent="center" alignItems="center" mt={4}>   
            <Button variant="outlined" 
                    onClick={hadleOrder} 
                    sx={{position:{xs: "static", sm:"absolute"}, top: "15%", right:"10%"}}>
                {order === "reverse" ? "Sort older first" : "Sort more recent first"}
            </Button> 
            <div style={{fontWeight: "bold", marginBottom: "1rem"}}>This is the import's archive</div>
            
            {listImport}
            </Stack> 
        </Box>
    )
}

function ListOfImport ({i, list}) {
    const [modalOpen, setModalOpen] = useState(false)

        return (
                <>
                <Button variant="outlined" 
                        onClick={e => setModalOpen(!modalOpen)}
                        sx={{width:{xs:"70%", sm:"40%"}}}>
                    {`Import Id:   ${list[i]["id"]}`}
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
                            {`Import ID:  ${list[i]["id"]}`}
                        </Typography>
                        <Divider  sx={{ my: 1.5 }} />
                        <Typography level="body2">
                            {"Files:"}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {list[i]["nome_file"].map(nome => 
                                <li><a href="">{nome}</a></li>)}
                        </Typography>
                    </Box>
                </Modal>      
                </>    
    )         
}



