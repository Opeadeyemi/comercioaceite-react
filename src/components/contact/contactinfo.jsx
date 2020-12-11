import React from 'react'
import './contactinfo.css'
import Headings from '../../utils/headings'
import * as RiIcons from 'react-icons/ri';
import { AllStrings } from '../../utils/strings'
import Flip from 'react-reveal/Flip';

const Contactinfo = (props) => {
    return (
        <div className="col s12 m6 contactinfocontainer white-text">

            <Headings text={localStorage.getItem('contactinfo')} color="white" />
            <p className="center infoparagraph">{localStorage.getItem('filltheform')}</p>
            <div className="contactdetails">
                <Flip bottom>
                    <div className="phonedetails row">
                        {/* <i className="material-icons col s2">local_phone</i> */}
                        <RiIcons.RiWhatsappFill className="col s2 contacticon"/>
                        <p className="col s10">{localStorage.getItem('phone')}</p>
                    </div>
                    <div className="maildetail row">
                        {/* <i className="material-icons col s2">email</i> */}
                        <RiIcons.RiMailFill className="col s2 contacticon"/>
                        <p className="col s10">{localStorage.getItem('email')}</p>
                    </div>
                    <div className="maildetail row">
                        {/* <i className="material-icons col s2">location_on</i> */}
                        <RiIcons.RiMapPin2Fill className="col s2 contacticon"/>
                        <p className="col s10">{localStorage.getItem('address')}</p>
                    </div>
                </Flip>
            </div>

            <div className="customercareimage">

            </div>

        </div>
    )
}


export default Contactinfo