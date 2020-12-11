import React from 'react'

const Button = (props) => {

    const btnstyles = {
        backgroundColor: `var(--themecolor)`,
        borderRadius: `10px`,
        fontSize: `1.4rem`,
        fontWeight: 700,
    }
    return (
        <button className="btn waves-effect" style={btnstyles}>
            {props.buttontext}
        </button>
    )
}

export default Button;
