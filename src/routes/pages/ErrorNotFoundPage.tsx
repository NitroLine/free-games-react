import { Center, Heading, Text } from "@chakra-ui/react"

function ErrorNotFoundPage() {
    return (
        <Center flexDirection={"column"} m={5} p={5}>
            <Heading>Ничего не найдено</Heading>
            <Text>Попробуйте вернуться назад</Text>
        </Center>
    )
}
export default ErrorNotFoundPage
