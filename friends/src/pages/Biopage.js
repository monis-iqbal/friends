import React from "react";
import { NavLink } from "react-router-dom";
import './Form.css'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';




const Biopage = () => {

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {
            console.log(file, fileList);
          }
        },
        defaultFileList: [
          
          
          
        ],
      };


    return (
        <>
            <div className="site-page-header">
                <span className="header_page_name">Friends</span>
                <p className="header_links"><NavLink exact activeClassName="Nav_links" to="/Home"
                >Skip-→</NavLink></p>
            </div>
            <div className="bio_page_div">

                <div className="bio_page_div1">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>,
                </div>

                <div>
                    <label>User Name :</label>
                    <input placeholder="Change your Name" />
                </div>
                <br />
                <div>
                    <label>Bio :</label>
                    <input placeholder="Change your description"  />
                    <br />
                </div>



            </div>

        </>

    )
}

export default Biopage;