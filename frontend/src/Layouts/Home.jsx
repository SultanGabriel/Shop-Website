import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { Hero } from '../Components/Hero';
import FeaturedProducts from '../Components/FeaturedProducts';

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
                {/* IDEA Some more text to fill in this space idk ? */}
            <FeaturedProducts />
            <Footer sticky={false}></Footer>
        </div>
    )
}

export { Home };