import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

function Footer(){
    return(
        <footer className="text-center text-white footer" style={{backgroundColor: '#f1f1f1',}}>
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faFacebook} /> </a>

                {/* <!-- Twitter --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faTwitter} /></a>

                {/* <!-- Google --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faGoogle} /></a>

                {/* <!-- Instagram --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faInstagram} /></a>

                {/* <!-- Linkedin --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faLinkedin} /></a>
                {/* <!-- Github --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><FontAwesomeIcon icon={faGithub} /></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright:

                <a className="text-dark" style={{margin:'0 10px'}} href="/">IoT Market</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
}

export default Footer;