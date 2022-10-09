import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Skinburn from '../pages/Skinburn';
import Hospital from '../pages/Hospital';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skinBurn" element={<Skinburn />} />
                <Route path="/hospitals" element={<Hospital />} />
            </Routes>
        </BrowserRouter>
    )
}
