import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import FeedPage from "./features/posts/pages/FeedPage";
import Navbar from "./components/Navbar";
import UploadPost from "./features/posts/components/UploadPost";
import NotFound from "./NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route exact path="/feed" element={
                        <ProtectedRoute>
                            <FeedPage />
                        </ProtectedRoute>
                    } />
                    <Route exact path="/upload" element={
                        <ProtectedRoute>
                            <UploadPost />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
