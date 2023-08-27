import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Pages from "./routes/Pages"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Pages />
                </BrowserRouter>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>
)
