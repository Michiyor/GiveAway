import React, {useState} from 'react';
import blankets from "./../../assets/Background-Contact-Form.jpg"

const HomeContact = () => {
    const [name, setName] = useState({name: ""});
    const [email, setEmail] = useState({email: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setName(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };
    const handleChangeEmail = (e) => {
        const {email, value} = e.target;
        setEmail(prevState => {
            return {
                ...prevState,
                [email]: value
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    };
    return (
        <>
            <section className="homeContact" id="contact">
                <div className="contact__picture">
                    <img className="image contact__image" src={blankets} alt="blanket"/>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <h3 className="title">Skontaktuj się z nami</h3>
                    <label> Wpisz swoje imię</label>
                    <input type="text" name="name" value={name.name} onChange={handleChange}/>
                    <label>Wpisz swojego emaila</label>
                    <input type="text" name="email" value={email.name} onChange={handleChangeEmail}/>
                    <label>Wpisz swoją wiadomość</label>
                    <textarea cols="50" rows="4">.</textarea>
                    <input type="submit" value="Wyślij"/>
                </form>
            </section>
        </>
    );
};

export default HomeContact;