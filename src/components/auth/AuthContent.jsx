

import Button from '../UI/button/Button'
import './AuthContent.css'

const AuthContent = () => {
    return (
        <div className='container content'>
            <div className='content-text'>
                <h3></h3>
                <p></p>
                <Button btnText={'Войти'} />
            </div>
            <div className='content-form'>
                <h3></h3>
                ricons
                <p></p>
                <div>
                    <input type="text" placeholder='Логин'/>
                    <input type="email" placeholder='E-mail'/>
                    <input type="password" placeholder='Пароль'/>
                    <Button btnText={'Зарегистрироваться'} />
                </div>
            </div>
        </div>
    )
}

export default AuthContent