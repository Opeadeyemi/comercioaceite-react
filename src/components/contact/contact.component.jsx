import React, { Component } from 'react'
import './contact.styles.css'
import Contactmessage from './contactmessage'
import Contactinfo from './contactinfo'


class Contact extends Component {

    state = {

    }

    componentDidMount() {
        
    }


    render() {
        return (
            <div className="row contactcontainer" id="contactcomponent">
                <Contactinfo/>
                <Contactmessage />
            </div>
        )
    }
}


export default Contact;

