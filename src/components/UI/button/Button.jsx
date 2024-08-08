


import { Button as AntButton } from "antd"

import './Button.css'

const Button = ({ btnText, icon, onClick }) => {
    return (
        <AntButton
            onClick={onClick}
            type="primary"
            shape="round"
            iconPosition="end"
            icon={icon}
            style={{
                background: '#EF4234',
                color: '#fff',
                padding: '10px 20px'
            }}
        >
            {btnText}
        </AntButton>
    )
}

export default Button