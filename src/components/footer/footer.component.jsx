import React, { Component } from 'react'
import './footer.styles.css'
import Contact from '../contact/contact.component'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Contact />
                <div className="footercopywrite">
                    <i><p className="footertext">&copy; comercioaceite.com {new Date().getFullYear()}</p></i>
                </div>
            </footer>
        )
    }
}

export default Footer
