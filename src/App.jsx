
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProfileEditPage from "./pages/ProfileEditPage";
import ProfileIndexPage from "./pages/ProfileIndexPage";
import AddProfilePage from "./pages/AddProfilePage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { useMode } from "./contexts/ModeContext";
import { useSelector } from "react-redux";
import "./App.css";



const App = () => {

    const mode = useSelector((state) => state.mode.mode);

    const LazyComponent = lazy(() => import("./pages/ProfileDetailPage"));

    return (
        <AuthProvider>
            <HashRouter>
                <header>
                    <Navbar />
                </header>
                <main className={mode === "light" ? "light" : "dark"}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/add-profile" element={
                            <ProtectedRoute>
                                <AddProfilePage />
                            </ProtectedRoute>
                        } />
                        <Route path="/profile/:id" element={<ProfileIndexPage />}>
                            <Route index element={<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>} />
                            <Route path="edit" element={<ProtectedRoute><ProfileEditPage /></ProtectedRoute>} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </HashRouter>
        </AuthProvider>
    );
};

export default App;
