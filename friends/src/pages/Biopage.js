import React from "react";
import { NavLink } from "react-router-dom";
import './Form.css'




const Biopage = () => {


    return (
        <>
            <div className="site-page-header">
                <span className="header_page_name">Friends</span>
                <p className="header_links"><NavLink exact activeClassName="Nav_links" to="/Home"
                >Skip-→</NavLink></p>
            </div>
            <div className="bio_page_div">

                <div className="bio_page_div1">
                    <div className="user_profile_setting"></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="bio_pic_edit_btn">Edit your Picture</button>
                </div>

                <div>
                    <label>User Name :</label>
                    <input placeholder="Change your Name" value="username" />
                </div>
                <br />
                <div>
                    <label>Bio :</label>
                    <input placeholder="Change your description" value="bio" />
                    <br />
                </div>



            </div>

        </>

    )
}

export default Biopage;