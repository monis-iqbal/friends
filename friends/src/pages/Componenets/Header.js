import React from 'react';
import '../Form.css'
import { NavLink } from "react-router-dom";



const Header = () => {
    return(
        <div className="site-page-header">
                <span className="header_page_name">Friends</span>
                <p className="header_links"><NavLink exact activeClassName="Nav_links" to="/Home"
                >Home</NavLink></p>
                </div>
    )
}

export default Header;