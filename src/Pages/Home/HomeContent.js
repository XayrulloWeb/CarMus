import React from 'react';
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";
import contentImg from "../../Images/contentImg.png"
import imgright from "../../Images/imgRight.png"
import imgleft from "../../Images/imgLeft.png"

function HomeContent(props) {

    return (
        <>
            <div className="home_content">
                <div className="container">
                    <div className="home_content-start">
                        <div className="home_content-left">
                            <div className="home_content-left-text">
                                <div className="home_content-left-text-box">
                                    <img src={logo1} alt="logo"/>
                                    <h4>материалы от лучших компаний</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
                                <div className="style_banner">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="home_content-left-text">
                                <div className="home_content-left-text-box">
                                    <img src={logo2} alt="logo"/>
                                    <h4>Опытные мастера</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus</p>
                                <div className="style_banner">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="home_content-left-text">
                                <div className="home_content-left-text-box">
                                    <img src={logo3} alt="logo"/>
                                    <h4>Гарантия на все виды работы</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.   </p>

                            </div>
                        </div>

                        <div className="home_content-right">
                            <div className="home_content-right-start">
                                <div className="home_content-right-img">
                                    <img src={contentImg} alt="img"/>
                                </div>

                                <div className="home_content-right-text">
                                    <img src={imgleft} alt="img"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                                    <img src={imgright} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeContent;
