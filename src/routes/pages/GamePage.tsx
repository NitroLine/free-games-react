import {Center, Flex, Heading, Image, Spinner, Text} from "@chakra-ui/react";
import {useGetGameQuery} from "../../api/gameApi";
import {useParams} from "react-router-dom";
import ErrorNotFoundPage from "./ErrorNotFoundPage";


function GamePage() {
    const {id} = useParams();
    const {data: game, isLoading} = useGetGameQuery(id ?? "")
    if (!id){
        return (<ErrorNotFoundPage/>)
    }
    return (<Center m={6}>
        {isLoading && <Center>
            <Spinner size={'xl'} color={'orange'}/>
        </Center>}
        {game && <Flex direction={'column'} gap={2} mx={[5, 10, 20]}>

            <Heading textAlign={'center'}>
                {game.title}
            </Heading>
            <Image src={game.thumbnail} maxW={'sm'}/>
            <Text>
                {game.description}
            </Text>
        </Flex>}
    </Center>)
}

export default GamePage;