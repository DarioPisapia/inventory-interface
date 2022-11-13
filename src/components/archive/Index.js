import {Box, Stack, Button} from "@mui/material"
import { useState } from "react";
import ListOfImports from "../listOfImports";

export default function Archive ( {list} ) {

    const [order, setOrder] = useState({items: [...list].reverse(), reverse: true})
    
    const hadleOrder = () => {
        order.reverse === true? 
        setOrder({items: list, reverse: false}) : 
        setOrder({items:[...list].reverse(), reverse: true}) 
    }
 
    return(
        <Box sx={{ width: '100%' }}>
           <Stack spacing={2} justifyContent="center" alignItems="center" mt={4}>   
            <Button variant="outlined" 
                    onClick={hadleOrder} 
                    sx={{position:{xs: "static", sm:"absolute"}, top: "15%", right:"10%"}}>
                {order.reverse === true ? "Sort older first" : "Sort more recent first"}
            </Button> 
            <div style={{fontWeight: "bold", marginBottom: "1rem"}}>This is the import's archive</div>
            {order.items.map((item)=> <ListOfImports item={item}/>)}
            </Stack> 
        </Box>
    )
}


