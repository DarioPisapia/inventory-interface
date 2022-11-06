import {Box, Button, Modal, Typography, IconButton, Divider} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

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

export default function ListOfImport ({i, list}) {
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
