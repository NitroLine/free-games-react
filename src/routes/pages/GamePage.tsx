import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    IconButton,
    Image,
    ListItem,
    Spinner,
    Text,
    UnorderedList,
} from "@chakra-ui/react"
import { useGetGameQuery } from "../../api/gameApi"
import { useNavigate, useParams } from "react-router-dom"
import ErrorNotFoundPage from "./ErrorNotFoundPage"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
function GamePage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: game, isLoading, error } = useGetGameQuery(id ?? "")
    if (!id) {
        return <ErrorNotFoundPage />
    }
    return (
        <Center m={6}>
            {isLoading && (
                <Center>
                    <Spinner size={"xl"} color={"orange"} />
                </Center>
            )}
            {!isLoading && error && (
                <Center>
                    <Box>
                        <Heading>Произошла ошибка</Heading>
                        {"data" in error && (
                            <Text>
                                {JSON.stringify(error.data, ["status_message"])}
                            </Text>
                        )}
                        {!("data" in error) && (
                            <Text>{JSON.stringify(error)}</Text>
                        )}
                    </Box>
                </Center>
            )}
            {game && (
                <Flex direction={"column"} gap={2} mx={[5, 10, 20]}>
                    <Button
                        position={["static", "absolute"]}
                        colorScheme={"blackAlpha"}
                        onClick={() => navigate(-1)}
                        maxW={"160px"}
                    >
                        Назад
                    </Button>
                    <Heading textAlign={"center"} mx={["0", "100px"]}>
                        {game.title}
                    </Heading>
                    <Box
                        position={"relative"}
                        maxH={"80vh"}
                        mt={2}
                        overflow={"hidden"}
                    >
                        <CarouselProvider
                            naturalSlideWidth={16}
                            naturalSlideHeight={9}
                            totalSlides={game.screenshots.length + 1}
                            infinite={true}
                            isPlaying={true}
                            interval={5000}
                        >
                            <Slider>
                                {game.screenshots.map((screenshot, i) => (
                                    <Slide index={i + 1}>
                                        <Image
                                            maxH={"80vh"}
                                            w={"100%"}
                                            objectFit={"cover"}
                                            src={screenshot.image}
                                            key={screenshot.id}
                                        />{" "}
                                    </Slide>
                                ))}
                                <Slide index={0}>
                                    {" "}
                                    <Image
                                        src={game.thumbnail}
                                        objectFit={"cover"}
                                        objectPosition={"center"}
                                        w={"100%"}
                                        maxH={"80vh"}
                                    />
                                </Slide>
                            </Slider>

                            <ButtonBack>
                                <IconButton
                                    colorScheme={"blackAlpha"}
                                    size={"lg"}
                                    aria-label="Back"
                                    icon={<ArrowLeftIcon />}
                                    position={"absolute"}
                                    top={"calc(50% - 30px)"}
                                    left={1}
                                />
                            </ButtonBack>
                            <ButtonNext>
                                <IconButton
                                    colorScheme={"blackAlpha"}
                                    size={"lg"}
                                    aria-label="Next"
                                    icon={<ArrowRightIcon />}
                                    position={"absolute"}
                                    top={"calc(50% - 30px)"}
                                    right={1}
                                />
                            </ButtonNext>
                        </CarouselProvider>
                    </Box>
                    <UnorderedList px={2}>
                        <ListItem>Издатель: {game.publisher}</ListItem>
                        <ListItem>Разработчик: {game.developer}</ListItem>
                        <ListItem>Жанр: {game.genre}</ListItem>
                    </UnorderedList>
                    <Heading size={"sm"}>Описание</Heading>
                    <Text px={2}>{game.description}</Text>
                    {game.minimum_system_requirements && (
                        <Box>
                            <Heading size={"sm"}>Системные требования</Heading>
                            <UnorderedList>
                                <ListItem>
                                    OS: {game.minimum_system_requirements.os}
                                </ListItem>
                                <ListItem>
                                    Процессор:{" "}
                                    {game.minimum_system_requirements.processor}
                                </ListItem>
                                <ListItem>
                                    Оперативная память:{" "}
                                    {game.minimum_system_requirements.memory}
                                </ListItem>
                                <ListItem>
                                    Видеокарта:{" "}
                                    {game.minimum_system_requirements.graphics}
                                </ListItem>
                                <ListItem>
                                    Место на диске:{" "}
                                    {game.minimum_system_requirements.storage}
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    )}
                </Flex>
            )}
        </Center>
    )
}

export default GamePage
