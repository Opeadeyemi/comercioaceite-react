import React from "react";
import Headings from "../../utils/headings";
import './contactpage.styles.css'

const Contactpage = () => {
  return (
    <div >
      <Headings text={localStorage.getItem('contactus')} color="var(--themecolor)" />
      <p className="center contacttext">
        {localStorage.getItem('contactusdesc')}
      </p>
    </div>
  );
};

export default Contactpage;
