import React from 'react';
import cars1 from "../../Images/cars1.png"
import cars2 from "../../Images/cars2.png"
import cars3 from "../../Images/cars3.png"
import cars4 from "../../Images/cars4.png"
import cars5 from "../../Images/cars5.png"
import cars6 from "../../Images/cars6.png"

function HomeWork(props) {
    const images = [
        {
            id:1,
            img: cars1,
        },
        {
            id:2,
            img: cars2,
        },
        {
            id:3,
            img: cars3,
        },
        {
            id:4,
            img: cars4,
        },
        {
            id:5,
            img: cars5,
        },
        {
            id:6,
            img: cars6,
        },
        {
            id:1,
            img: cars1,
        },
        {
            id:2,
            img: cars2,
        },
        {
            id:3,
            img: cars3,
        },
        {
            id:4,
            img: cars4,
        },
        {
            id:6,
            img: cars6,
        },
        {
            id:1,
            img: cars1,
        },
        {
            id:2,
            img: cars2,
        },
        {
            id:3,
            img: cars3,
        },
        {
            id:4,
            img: cars4,
        },

    ]
    return (
        <div className="home_work">
            <div className="home_work-start">
                <div className="home_work-text">
                    <h3>Наши работы</h3>
                </div>
                <div className="style_banner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="home_work-images">
                    {
                        images.map(item => {
                            return(
                                <img key={item.id} src={item.img} alt="img"/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default HomeWork;
