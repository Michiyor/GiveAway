import React from 'react';
import aboutUsImage from "./../../assets/People.jpg"

const HomeAboutUs = () => {
    return (
        <section className="homeAboutUs" id="aboutUs">
            <div className="aboutUs__half">
                <h2 className="title">O nas</h2>
                <p className="aboutUs__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            </div>
            <div className="aboutUs__imageHalf">
                <img src={aboutUsImage} alt="people" className="aboutUs__img"/>
            </div>
        </section>
    );
};

export default HomeAboutUs;