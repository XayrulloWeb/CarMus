import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import car1 from "../../Images/car1.png"
import car2 from "../../Images/car2.png"
import car3 from "../../Images/car3.png"
import telegram from "../../Images/telegram.png"
import vk from "../../Images/vk.png"
import youtube from "../../Images/youtube.png"
import HomeSection from "./HomeSection";
import HomeContent from "./HomeContent";
import HomeServices from "./HomeServices";
import HomeWork from "./HomeWork";
import phone from "../../Images/phone.png"
import email from "../../Images/email.png"
import adress from "../../Images/adress.png"

function Home(props) {
        const [active,setOpen] = useState(false)

        const handleClick = () =>{
            setOpen(!active)
        }

    const images = [car1, car2, car3];


    return (
        <div className="home">
            <div className="home_start">
                <div className="home_navbar" >
                    <div className="header">
                        <div className="header_links">
                            <Link to={'/'}>Главная</Link>
                            <Link to={'/detailcar'}>Детейлинг автомобилей</Link>
                            <Link to={'/works'} >Галерея работ</Link>
                        </div>

                        <div className={`burger ${active ? 'active' : ''}`} onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header_start">
                        <div className="header_banner">
                            <div className="header_banner-text">
                                <h2>Car Music</h2>
                                <div className="style_banner">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Vitae orci urna amet penatibus.</p>
                                <button>Наши услуги</button>
                            </div>

                            <div className="header_banner-about">
                                <div className="header_about-adress">
                                    <h3>Адрес:</h3>
                                    <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit </p>
                                </div>

                                <div className="header_about-phone">
                                    <h3>Телефон:</h3>
                                    <p>8 (812) 123-45-67</p>
                                    <p>8-911-123-45-67</p>
                                </div>

                                <div className="header_about-mode">
                                    <h3>Режим Работы:</h3>
                                    <p>пн-пт : 10:00 - 20:00</p>
                                    <p>сб-вск : 12:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeSection/>

                <div className="home_cars-slide">
                    <Carousel
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        swipeable
                        emulateTouch
                        infiniteLoop
                        selectedItem={0}
                        height = "350px"
                        width= "100%"
                        centerMode
                        centerSlidePercentage={33.3}
                        showArrows
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} alt="img"/>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <HomeContent/>
                <HomeServices/>
                <HomeWork/>

                <div className="contact">
                    <div className="contact_start">
                        <div className="contact_text">
                            <h3>ответим на любой вопрос</h3>
                            <div className="style_banner">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="contact_input">
                            <div className="contact_about">
                                <input type="text" placeholder="ИМЯ"/>
                                <input type="number" placeholder="ТЕЛЕФОН"/>
                            </div>
                            <div className="contact_box">
                                <input type="text" placeholder="Вопрос по дизайну, тюнингу и др."/>
                                <div className="contact_links">
                                    <img src={telegram} alt="icon"/>
                                    <img src={youtube} alt="icon"/>
                                    <img src={vk} alt="icon"/>
                                </div>
                            </div>
                        </div>

                        <div className="contact_adress">
                            <div className="contact_adress-start">
                                <div className="contact_btn">
                                    <button>Отправить</button>
                                </div>
                                <div className="contact_adress-about">
                                    <div className="contact_adress-about-text">
                                        <img src={adress} alt="icon"/>
                                        <Link>Eu faucibus et rutrum fringilla orci nunc</Link>
                                    </div>
                                    <div className="contact_adress-about-text2">
                                        <div className="contact_adress-about-phone">
                                            <img src={phone} alt="icon"/>
                                            <Link>8 (812) 123-45-67</Link>
                                        </div>
                                        <div className="contact_adress-about-email">
                                            <img src={email} alt="icon"/>
                                            <Link>test@test.ru</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Home;
