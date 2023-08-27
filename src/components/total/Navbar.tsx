import {Box, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export function Navbar(){
    return ( <Box bg="orange.500" p="5" px="10">

        <Heading size={'lg'} color={'white'}>
            <Link to={'/'}>
            Free Games
            </Link>
        </Heading>

    </Box>)
}