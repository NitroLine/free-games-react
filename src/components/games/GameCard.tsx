import { Game } from "../../types/game"
import {
    Card,
    CardBody,
    Heading,
    Stack,
    Image,
    Text,
    Badge,
    Flex,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useMemo } from "react"

interface GameCardProps {
    game: Game
}

export function GameCard({ game }: GameCardProps) {
    const releaseDate = useMemo(
        () =>
            new Date(game.release_date).toLocaleDateString("ru", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }),
        [game]
    )
    return (
        <Card maxW="sm">
            <Link to={`/game/${game.id}`}>
                <CardBody>
                    <Image
                        src={game.thumbnail}
                        alt={game.title}
                        borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{game.title}</Heading>
                        <Flex
                            color="blue.600"
                            fontSize="sm"
                            justifyContent={"space-between"}
                        >
                            <Text>{game.publisher}</Text>
                            <Text>{releaseDate}</Text>
                        </Flex>
                        <Flex gap={3}>
                            <Badge colorScheme={"green"}>{game.genre}</Badge>
                        </Flex>
                        <Text>{game.short_description}</Text>
                    </Stack>
                </CardBody>
            </Link>
        </Card>
    )
}
