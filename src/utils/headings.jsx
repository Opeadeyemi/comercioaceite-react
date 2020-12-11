import React from 'react'

const Headings = (props) => {

    const headingdivstyle = {
        color: `${props.color}`,
        display: 'flex',
        justifyContent: 'center',
        marginBottom:'2rem',
        marginTop:'2rem'

    }

    const headingstyle = {
        fontWeight: 'Bold',
        fontSize:'3.2rem',
        // textDecoration:'underline'
    }
    return (
        <div className="headingdiv" style={headingdivstyle}>
            <h3 style={headingstyle}>{props.text}</h3>
        </div>
    )
}

export default Headings
