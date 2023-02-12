import MyHeader from "../css/Styles";
import Logo from "../images/logo.jpg";

const Header = () => {
    return (
        <MyHeader>
            <h1>Lost Ark Roadmap for Early 2023</h1>
            <img src={Logo} alt="Logo" width="350" height="200"></img>
            <p>This website contains Lost Ark information on the first three months of 2023</p>
        </MyHeader>
    );
}

export default Header;