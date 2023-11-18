import logo from '/vite.svg'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact">EN</a>
        </nav>

    );
};

export default Header;
