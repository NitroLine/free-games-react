import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/total/Navbar"

function Layout() {
    return (
        <Box
            minHeight="calc(100vh - 5px)"
            display="flex"
            flexDirection="column"
            bg="yellow.50"
        >
            <Navbar />
            <Box flexGrow="1">
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
