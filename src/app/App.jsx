import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./components/counter/Counter";
import Gallery from "./components/gallery/Gallery";
import UserList from "./components/user-list/UserList";

import { Layout } from "../common/components/layout/Layout";
import { Feed } from "./components/feed/Feed";
import { Main } from "./components/main/Main";
import { Calc } from "./components/calc/Calc";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/learn/*" element={<Main />}>
                        <Route element={<Gallery />} index={true} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="userlist" element={<UserList />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="posts" element={<Feed />} />
                        <Route path="calculator" element={<Calc />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
