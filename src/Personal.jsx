import React, { useState } from "react";

export const Personal = (props) => {
    const [name, setUser] = useState('');
    const [age, setPass] = useState('');
    const [sex, setSex] = useState('');
    const [add, setAdd] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
      };

    return (
        <div className="auth-form-container">
            <h1 id="personal">Personal Details</h1>
            <form className="loginForm" onSubmit={handleSubmit}>

                <input value={name} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Name" id="name" name="name"/>

                <input value={age} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Age" id="age" name="age"/>

                <input value={sex} onChange={(e) => setSex(e.target.value)} type="text" placeholder="Sex" id="sex" name="sex"/>

                <input value={add} onChange={(e) => setAdd(e.target.value)} type="text" placeholder="Address" id="address" name="address"/>

                <br/>

                <button type="submit">Confirm Booking</button>

                {showModal && (
                    <div className="modal">
                    <div className="modal-content">
                        <h2>Review Your Details</h2>
                        <p id="modalfont">Name: {name}</p>
                        <p id="modalfont">Age: {age}</p>
                        <p id="modalfont">Sex: {sex}</p>
                        <p id="modalfont">Address: {add}</p>
                        <div className="modal-buttons">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={() => props.onFormSwitch("Login")}>
                            Confirm
                        </button>
                        </div>
                    </div>
                    </div>
                )}
                
            </form>
            <p> OR </p>
            <button className="bookBtn" onClick={() => props.onFormSwitch('Book')}>Back</button>



        </div>
    )
}