import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { Hero } from '../Components/Hero';

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Footer sticky={true}></Footer>
        </div>
    )
}

export { Home };