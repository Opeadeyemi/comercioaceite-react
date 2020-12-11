import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import M from "materialize-css";
import { Link } from 'react-router-dom'
import './header.styles.css'
import Logo from '../../img/logo.png'
import * as FaIcons from 'react-icons/fa'
import { NavbarItems } from './navbaritems'
import * as RiIcons from 'react-icons/ri';
import Flip from 'react-reveal/Flip';
import withLanguage from '../hoc/withlanguage'


const Header = (props) => {

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {

        let newStorageVersion = 3
        let currentStorageVersion = localStorage.getItem('storageversion');

        let fabs = document.querySelectorAll(".fixed-action-btn");
        M.FloatingActionButton.init(fabs);


        if((currentStorageVersion==undefined)||(currentStorageVersion != newStorageVersion)){
            localStorage.setItem("storageversion", newStorageVersion);
            props.changeLanguage('en')
        }

        if (localStorage.getItem('sitename') == undefined) {
            props.changeLanguage('en')
        }
    }, []);

    const sideBarswitch = () => {
        setSidebar(!sidebar)
    }




    return (
        <div >
            <div className="headercontainer" id="homecomponent">
                <Link to="/" className="logodiv">
                    <img src={Logo} alt="Logo" className="responsive-img logo" />

                </Link>

                <div className="titlecontainer">

                    <h2 className="sitetitle">{localStorage.getItem('sitename')}</h2>
                    <i className="material-icons hide-on-large-only" id="hamburger" onClick={sideBarswitch}>dehaze</i>

                    <nav className="headerlinkcontainer hide-on-med-and-down">
                        <ul className="headlinks">
                            {NavbarItems.map((item, index) => {
                                return (
                                    <li key={index} onClick={sideBarswitch}>
                                        <Link to={item.path} className="headlll">
                                            {item.title}
                                        </Link>
                                    </li>


                                )

                            })}

                            {/* <li onClick={() => props.changeLanguage('es')}>Language o</li> */}
                        </ul>
                    </nav>

                    <nav className={sidebar ? 'sidebarcontainer nav-menu active hide-on-large-only' : 'sidebarcontainer nav-menu  hide-on-large-only'}>
                        <div className="closebtn btn blue" onClick={sideBarswitch}>
                            X
                        </div>
                        <ul className="sidebarlinks">
                            <li>
                                <h4 className="menutitle center">{localStorage.getItem('menu')}</h4>
                            </li>
                            {
                                NavbarItems.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName} onClick={sideBarswitch}>
                                            <Link to={item.path} onClick={sideBarswitch}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })
                            }

                            <li className="sidenavcontactcontainer">
                                <Flip bottom>
                                    <div className="sidenavcontactdetails row">
                                        {/* <i className="material-icons col s2">local_phone</i> */}
                                        <RiIcons.RiWhatsappFill className="col s2 contacticon" />
                                        <p className="sidenavcontact col s10">{localStorage.getItem('phone')}</p>
                                    </div>
                                    <div className="sidenavcontactdetails row">
                                        {/* <i className="material-icons col s2">email</i> */}
                                        <RiIcons.RiMailFill className="col s2 contacticon" />
                                        <p className="sidenavcontact col s10">{localStorage.getItem('email')}</p>
                                    </div>
                                    <div className="sidenavcontactdetails row">
                                        {/* <i className="material-icons col s2">location_on</i> */}
                                        <RiIcons.RiMapPin2Fill className="col s2 contacticon" />
                                        <p className="sidenavcontact col s10">{localStorage.getItem('address')}</p>
                                    </div>
                                </Flip>
                            </li>


                        </ul>
                    </nav>
                </div>
                <div className="fixed-action-btn">
                    <span className="btn-floating btn-large red btnchangelanguage click-to-toggle">
                        {/* <i className="large material-icons">mode_edit</i> */}
                        <FaIcons.FaLanguage className="large material-icons" style={{marginRight:'0.5rem'}}/> <strong>Language</strong>
                    </span>
                    <ul>
                        <li onClick={() => props.changeLanguage('en')}><span className="btn-floating langoption-floating blue darken-2">English</span></li>
                        <li onClick={() => props.changeLanguage('es')}><span className="btn-floating langoption-floating indigo">Spanish</span></li>
                        <li onClick={() => props.changeLanguage('po')}><span className="btn-floating langoption-floating blue darken-3">Polish</span></li>
                        <li onClick={() => props.changeLanguage('hu')}><span className="btn-floating langoption-floating blue darken-3">Hungarian</span></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(withLanguage(Header))
