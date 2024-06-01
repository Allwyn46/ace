import './App.css';
import { BentoGridDemo } from '@/components/Bento';
import { NavbarDemo } from '@/components/Navbar';
import { BentoGridThirdDemo } from '@/components/Bento1';
import Hero from './sections/Hero';
import Nav from '@/components/Nav';

function App() {
    return (
        <>
            <div className="bg-black">
                <div className="mb-4 p-4">
                    <img src="" alt="" />
                </div>
                {/* <NavbarDemo /> */}
                <Nav />
                <Hero />
                <BentoGridDemo />
                <BentoGridThirdDemo />
            </div>
        </>
    );
}

export default App;
