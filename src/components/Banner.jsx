import "../styles/Banner.css";
import logo from "../assets/logo.png";
function Banner({ title }) {
    return (
        <div className="banner">
            <img
                src={logo}
                alt="logo de l'application"
                className="banner-logo"
            />
            <h1 className="banner-title">{title}</h1>
        </div>
    );
}

export default Banner;
