import { useAuthContext } from '../Auth/AuthContext';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';

function User() {
    const { user, isLoading, setUser } = useAuthContext();

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <pre>
                    {
                        JSON.stringify(user, null, 4)
                    }
                </pre>
            </div>
            <Footer sticky={true}></Footer>
        </div>
    )
}

export { User };