import {Box, Stack, Button } from "@mui/material"

import { useState } from "react";

import ListOfImport from "./ListOfImports";

export default function Archive ( {list} ) {

    const [order, setOrder] = useState("reverse")
    const listImport = []
  
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


