import { ReactComponent as LogoSVG } from '../img/logo.svg'
import { ReactComponent as FacebookSVG } from '../img/facebook.svg'
import { ReactComponent as InstagramSVG } from '../img/instagram.svg'
import { ReactComponent as TwitterSVG } from '../img/twitter.svg'

function Footer(props) {
    return (
        <footer className={props.sticky ? "footer fixed-bottom" : "footer"}>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <LogoSVG width="48px" height="48px"/>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                            <a className="text-muted" href="#">
                                <FacebookSVG width="24px" height="24px"/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <InstagramSVG width="24px" height="24px"/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <TwitterSVG width="24px" height="24px"/>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export { Footer };
// TODO Add Social Media Links
// TODO SITEMAP!