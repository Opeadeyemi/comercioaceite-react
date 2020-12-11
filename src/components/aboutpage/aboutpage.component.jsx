import React, { Component } from 'react'
import './aboutpage.styles.css'
import About from '../about/about.component'
import Headings from '../../utils/headings'
import * as FaIcons from 'react-icons/fa';
import * as GIicons from "react-icons/gi";

class Aboutpage extends Component {
    state = {
        chooses: [
            {
                icon : <FaIcons.FaRegMoneyBillAlt className="chooseicon"/>,
                title: localStorage.getItem('quality'),
                desc: localStorage.getItem('qualitydesc')
            },
            {
                icon: <FaIcons.FaUser className="chooseicon"/>,
                title: localStorage.getItem('fastdelivery'),
                desc: localStorage.getItem('fastdeliverydesc')
            },
            {
                icon: <GIicons.GiTrophyCup className="chooseicon"/>,
                title: localStorage.getItem('widechoice'),
                desc: localStorage.getItem('widechoicedesc')
            }
        ]


    }


    render() {


        return (
            <>
                <About />
                <div className="chooseus row">

                    <div className="col s12">
                        <Headings text={localStorage.getItem('whychoose')} color="var(--themecolor)"/>
                    </div>

                    {
                        this.state.chooses.map((choose, index) => {
                            return (
                                <div key={index} className="col s12 m4 choosecard center">
                                    {choose.icon}
                                    <h3 className="center">{choose.title}</h3>
                                    <p>{choose.desc}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </>
        )
    }
}

export default Aboutpage
