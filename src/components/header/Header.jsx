import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '../../assets/LOGO.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="" />
                <a href="">Главная</a>   
                <a href="">Фильмы</a>   
            </div>
            <div className="actions">
                <button>EN</button>
                <FaRegCircleUser  fill="#fff"/>
            </div>
        </header>
    )
}

export default Header