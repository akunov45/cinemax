import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '../../assets/LOGO.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header >
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/film">Фильмы</NavLink>
                </div>
                <div className="actions">
                    <button>EN</button>
                    <NavLink to="/auth">
                        <FaRegCircleUser fill="#fff" />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header