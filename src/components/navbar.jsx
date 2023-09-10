import "./navbar.css";

function Navbar() {
    return (
        <header className="navbarcomponent">
            <h1 className="title">IoT Market</h1>
            <nav className="header-nav">
                <a href="/">Login</a>
                <a href="/">Register</a>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">IoT Market</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="/">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;