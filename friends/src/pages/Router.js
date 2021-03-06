import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Biopage from './Biopage';

export default function MyRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/biopage" element={<Biopage/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Signup/>} />
            </Routes>
            </Router>
                )
}
