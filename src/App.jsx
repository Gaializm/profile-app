
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProfileIndexPage from "./pages/ProfileIndexPage";
import AddProfilePage from "./pages/AddProfilePage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";



const App = () => {

    const [mode, setMode] = useState("light");

    const handleModeChange = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <HashRouter>
            <header>
                <Navbar mode={mode} updateMode={handleModeChange} />
            </header>
            <main className={mode === "light" ? "light" : "dark"}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/add-profile" element={<AddProfilePage />} />
                    <Route path="profile/:id" element={<ProfileIndexPage />}>
                        <Route index element={<ProfileDetailPage />} />
                        <Route path="edit" element={<ProfileEditPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </HashRouter>
    );
};

export default App;
