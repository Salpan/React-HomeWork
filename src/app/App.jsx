import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./components/counter/Counter";
import Gallery from "./components/gallery/gallery/Gallery";
import UserList from "./components/user-list/UserList";
import { Feed } from "./components/feed/Feed";
import { Main } from "./components/main/Main";
import { Calc } from "./components/calc/Calc";
import { Form } from "./components/form/Form";
import { ContextApiPage } from "../pages/contex-api-page/ContextApiPage";
import { EffectorPage } from "../pages/effector-page/EffectorPage";
import '../models/init'
import { Profile } from "../pages/profile";
import { ProfileSecurity } from "../pages/profile-security";
import { ProfileSettings } from "../pages/profile-settings";
import { ProfileDashboard } from "../pages/profile-dashboard";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Main />}>
                    <Route element={<Gallery />} index={true} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="userlist" element={<UserList />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="posts" element={<Feed />} />
                    <Route path="calculator" element={<Calc />} />
                    <Route path="form" element={<Form />} />
                    <Route path="context" element={<ContextApiPage />} />
                    <Route path="effector" element={<EffectorPage />} />
                </Route>
                <Route path="/profile" element={<Profile />}>
                    <Route element={<ProfileDashboard />} index />
                    <Route path=":id" element={<ProfileDashboard />} />
                    <Route path="security" element={<ProfileSecurity />} index />
                    <Route path="settings" element={<ProfileSettings />} index />
                </Route>
                <Route path="*" element="404 - Not found" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
