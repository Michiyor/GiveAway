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
            <section className="homeContact" id="contact" style={{backgroundImage: `url(${blankets})`}}>
                <div className="contact__main">
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <h3 className="title">Skontaktuj się z nami</h3>
                        <label htmlFor="name"> Wpisz swoje imię</label>
                        <input id="name" placeholder="Jan" type="text" name="name" value={name.name} onChange={handleChange}/>
                        <label htmlFor="email">Wpisz swojego emaila </label>
                        <input id="email" placeholder="jan.nowak@gmail.com" type="text" name="email" value={email.name}
                               onChange={handleChangeEmail}/>
                        <label htmlFor="msg">Wpisz swoją wiadomość</label>
                        <textarea id="msg"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            cols="50" rows="6">
                    </textarea>
                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
            </section>
        </>
    );
};

export default HomeContact;