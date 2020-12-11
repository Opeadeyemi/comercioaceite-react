import React from 'react'
import Headings from '../../utils/headings'
import './about.styles.css'

function About() {
    return (
        <div id="aboutcomponent">

            <Headings text={localStorage.getItem('aboutus')} color="var(--themecolor)" />
            <p className="abouttext">
                {localStorage.getItem('aboutusdesc')}
            </p>
        </div>
    )
}

export default About
