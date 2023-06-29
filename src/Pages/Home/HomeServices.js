import React from 'react';
import icon1 from "../../Images/icon1.png"
import icon2 from "../../Images/icon2.png"
import icon3 from "../../Images/icon3.png"
import icon4 from "../../Images/icon4.png"

function HomeServices(props) {
    return (
        <div className="home_services">
            <div className="container">
                <div className="home_services-start">
                    <div className="home_services-Gtext">
                        <h3>Наши услуги</h3>
                        <div className="style_banner">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="home_services-btns">
                            <button >Оклейка</button>
                            <button>Детейлинг</button>
                        </div>
                    </div>

                    <div className="home_services-boxes">
                        <div className="home_services-box">
                            <img src={icon1} alt="icon"/>
                            <h4>Защитные пленки</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="home_services-box">
                            <img src={icon2} alt="icon"/>
                            <h4>Цветные пленки</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="home_services-box">
                            <img src={icon3} alt="icon"/>
                            <h4>Дизайн</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="home_services-box">
                            <img src={icon4} alt="icon"/>
                            <h4>Оклейка салона</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.</p>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeServices;
