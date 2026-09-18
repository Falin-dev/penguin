import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import FeedPage from "./features/posts/pages/FeedPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<p>Hi</p>}/>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/feed" element={<FeedPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
