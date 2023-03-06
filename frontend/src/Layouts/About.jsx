import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';

function About() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container my-4">
                <h2>Hello World!</h2>
                <img src="https://picsum.photos/600/400" alt="random image" srcset="" />
            </div>
            <Footer sticky={true}></Footer>
        </div>
    )
}

export { About };