import React, {useState} from 'react';
import blankets from "./../../assets/Background-Contact-Form.jpg"

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

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
    };const handleChangeMsg = (e) => {
        const {msg, value} = e.target;
        setMsg(prevState => {
            return {
                ...prevState,
                [msg]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
                method: "POST",
                body: JSON.stringify({
                    name: "Test",
                    email: "test@wp.pl",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
                        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    return (
        <>
            <section className="homeContact" id="contact" style={{backgroundImage: `url(${blankets})`}}>
                <div className="contact__main">
                    <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
                        <h3 className="title">Skontaktuj się z nami</h3>
                        <div className="contact__labels">
                            <label className="label" htmlFor="name"> Wpisz swoje imię</label>
                            <label className="label" htmlFor="email">Wpisz swojego emaila </label>
                        </div>
                        <input className="contact__el" id="name" placeholder="Jan" type="text" name="name" value={name.name} onChange={handleChange}/>
                        <input className="contact__el" id="email" placeholder="jan.nowak@gmail.com" type="text" name="email" value={email.name}
                               onChange={handleChangeEmail}/>
                        <label className="contact__msg-label" htmlFor="msg">Wpisz swoją wiadomość</label>
                        <textarea
                            onChange={handleChangeMsg}
                            value={msg.name}
                            id="msg"
                            className="contact__msg"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            cols="50"
                            rows="6">
                    </textarea>
                        <input
                            className="contact__btn"
                            type="submit"
                            id="validate"
                            value="Wyślij"
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

export default HomeContact;