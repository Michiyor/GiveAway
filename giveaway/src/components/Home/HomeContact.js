import React, {useState} from 'react';

const HomeContact = () => {
    const [name, setName] = useState({ name: ""});
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
            <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="title">Skontaktuj się z nami</h3>
                <label> Wpisz swoje imię</label>
                <input  type="text" name="name" value={name.name} onChange={handleChange} />
                <input type="text" name="email" value={email.name} onChange={handleChangeEmail}/>
                <textarea />
                <input type="submit" value="Wyślij"/>
            </form>
            </section>
        </>
    );
};

export default HomeContact;