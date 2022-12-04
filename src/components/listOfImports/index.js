import {Box, Button, Modal, Typography, IconButton, Divider} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";
import { style } from "./styles";


export default function ListOfImports ({item}) {
    const [modalOpen, setModalOpen] = useState(false)
        const date = new Date(item["updated_at"])
       
        return (
                <>
                <Button 
                    variant="outlined" 
                    onClick={e => setModalOpen(!modalOpen)}
                    sx={{width:{xs:"70%", sm:"40%"}}}
                >
                    {`Import Id:   ${item["id"]}`}
                    <br></br>
                    {`Date of Import: ${date.toLocaleString()}`}
                </Button> 
                <Modal
                    open={modalOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                            
                    <Box sx={style} >
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
                            {`Import ID:  ${item["id"]}`}
                        </Typography>
                        <Divider  sx={{ my: 1.5 }} />
                        <Typography level="body2">
                            {"Files:"}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {JSON.parse(item["dati_importati"]).map(nome => 
                                <li><a href="">{nome}</a></li>)}
                        </Typography>
                    </Box>
                </Modal>      
                </>    
    )         
}

