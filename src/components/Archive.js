import {Box, Stack, Button, Pagination, Modal, Typography, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import usePagination from '@mui/material/usePagination';
import { useState } from "react";
export default function Archive ( {files} ) {
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

    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState('')

    

    const handleModal = (file) => {
        setModalOpen(!modalOpen)
        setModalData(file)
    }

 
    return(
        <Box sx={{ width: '100%' }}>
           <Stack spacing={2} justifyContent="center" alignItems="center" mt={4}>   

            <div>This is the import's archive</div>

            {files.map(file => 
                <Button 
                        variant="outlined"
                        onClick={e => handleModal(file)}>{file.title}</Button>   
            )}     
            <Modal
                open={modalOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                            
                <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={handleModal}
                    sx={{
                        position: 'absolute',
                        right: 7,
                        top: 7,
                    }}
                    >
                    <CloseIcon />
                </IconButton> 
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalData.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalData.content}
                    </Typography>
                </Box>
            </Modal>  
            {/* <Pagination count={10} variant="outlined" shape="rounded" color="primary"/> */}
            </Stack> 
        </Box>
    )
}