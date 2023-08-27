import {Center, Flex, FormLabel, Heading, Select, Spinner, Text} from "@chakra-ui/react";
import {useGetGamesListQuery} from "../../api/gameApi";
import {GameCard} from "../../components/games/GameCard";
import {useState} from "react";
import {Genres, Platforms, SortBy} from "../../types/searchOptions";


function GamesListPage() {
    const [category, setCategory] = useState<string | undefined>();
    const [platform, setPlatform] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('relevance');
    const {data, isLoading, error} = useGetGamesListQuery({platform, category, sortBy});
    return (<Flex direction={'column'} m={[5, 10]}>
        <Flex gap={2} justifyContent={'center'} direction={['column', 'row']}>
            <FormLabel w={'100%'} maxW={'sm'}>
                Жанр
            <Select value={category} onChange={(e) => setCategory(e.target.value)} bg={'white'} >
                {Object.entries(Genres).map((k) => (<option key={k[1]} value={k[1]}>{k[0]}</option> ))}
            </Select>
            </FormLabel>
            <FormLabel w={'100%'} maxW={'sm'}>
                Платформа
            <Select value={platform} onChange={(e) => setPlatform(e.target.value)} bg={'white'} >
                {Object.entries(Platforms).map((k) => (<option key={k[1]} value={k[1]}>{k[0]}</option> ))}
            </Select>
            </FormLabel>
            <FormLabel w={'100%'} maxW={'sm'}>
                Сортировать по
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} bg={'white'} >
                {Object.entries(SortBy).map((k) => (<option key={k[1]} value={k[1]}>{k[0]}</option> ))}
            </Select>
            </FormLabel>
        </Flex>
        <Flex flexWrap={'wrap'} gap={5} mt={5} justifyContent={'center'}>

        {isLoading && (
            <Center>
                <Spinner size={'xl'} color={'orange'}/>
            </Center>
        )}
        {!isLoading && error && (
            <Center flexDirection={'column'} mt={5} p={5}>
                <Heading >Произошла ошибка</Heading>
                <Text> {JSON.stringify(error)}</Text>
            </Center>
        )}
        {!isLoading && data && !(data.length > 0) && (
            <Center flexDirection={'column'} mt={5} p={5}>
                <Heading size={'lg'}>Ничего не найдено</Heading>
            </Center>
        )}
        {!isLoading && data && data.length > 0 && data.map((game) => (<GameCard game={game} key={game.id}/>))}
    </Flex>
    </Flex>)
}

export default GamesListPage;