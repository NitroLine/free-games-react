import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import GamesListPage from "./pages/GamesListPage";
import GamePage from "./pages/GamePage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";

export default function Pages() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<GamesListPage />} />
                <Route path="/game/:id" element={<GamePage />} />
                <Route path="*" element={<ErrorNotFoundPage />}/>
            </Route>
        </Routes>
    )
}
