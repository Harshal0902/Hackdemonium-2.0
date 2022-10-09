import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Hospital from '../pages/Hospital';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hospitals" element={<Hospital />} />
            </Routes>
        </BrowserRouter>
    )
}
