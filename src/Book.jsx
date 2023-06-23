import React, { useEffect, useState } from "react";
import './App.css';
import GRlogo from "./img/GRlogo.png"





const trainTimeIntervalMap = {
    "Donsal Express": ["09:00:00", "11:30:00", "14:00:00", "16:30:00", "19:00:00"],
    "Rural Express Tours": ["09:15:00", "11:45:00", "14:15:00", "16:45:00", "19:15:00"],
    "Super5 Express": ["09:30:00", "12:00:00", "14:30:00", "17:00:00", "19:30:00"],
    "Oro Express": ["09:45:00", "12:15:00", "14:45:00", "17:15:00", "19:45:00"],
    "Mindanao Express": ["10:00:00", "12:30:00", "15:00:00", "17:30:00", "20:00:00"],
    "Hogswart Express": ["10:15:00", "12:45:00", "15:15:00", "17:45:00", "20:15:00"],
    "Orient Express": ["10:30:00", "13:00:00", "15:30:00", "18:00:00", "20:30:00"],
    "Glacier Express": ["10:45:00", "13:15:00", "15:45:00", "18:15:00", "20:45:00"],
    "Blue Train": ["11:00:00", "13:30:00", "16:00:00", "18:30:00", "21:00:00"],
    "Oriental Express": ["11:15:00", "13:45:00", "16:15:00", "18:45:00"]

  };

  const tripDirectionTrainNumbersMap = {
    "CDO-DAVAO": ["Donsal Express", "Rural Express Tours", "Super5 Express", "Oro Express", "Mindanao Express"],
    "DAVAO-CDO": ["Hogswart Express", "Orient Express", "Glacier Express", "Blue Train", "Oriental Express"],
  };

export const Book = (props) => {
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

    const handleNextPage = () => {
        props.onFormSwitch('Personal'); // Call the onFormSwitch function with the desired next page value
      };

    const [selectedDate, setSelectedDate] = useState("");
    const [dateRange, setDateRange] = useState({ minDate: "", maxDate: "" });
    const [trainNumber, setTrainNumber] = useState("");
    const [timeIntervalOptions, setTimeIntervalOptions] = useState([]);
    const [tripDirection, setTripDirection] = useState("");

    useEffect(() => {
        const currentDate = new Date();
        const minDate = currentDate.toISOString().slice(0, 10); // Current date
        const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        const maxDate = nextWeek.toISOString().slice(0, 10); // Current date + 7 days
    
        setDateRange({ minDate, maxDate });
      }, []);

  useEffect(() => {
    setTimeIntervalOptions(trainTimeIntervalMap[trainNumber] || []);
  }, [trainNumber]);

  const handleTrainNumberChange = (event) => {
    setTrainNumber(event.target.value);
  };

  const handleTripDirectionChange = (event) => {
    const selectedDirection = event.target.value;
    setTripDirection(selectedDirection);
    if (!tripDirectionTrainNumbersMap[selectedDirection]?.includes(trainNumber)) {
      setTrainNumber(""); // Reset train number if not applicable for the selected trip direction
    }

  };

  const filteredTrainNumbers = tripDirectionTrainNumbersMap[tripDirection] || Object.keys(trainTimeIntervalMap);


    return (
      
        <section className="home">
            <div className="overlay"></div>
            <div className="app">
      <img src={GRlogo}alt="Logo" className="logo" />
    </div>
            <h1 id = "title">Golden Railway</h1>
            <span className="smallText">
                        Book Your Ticket Here
                    </span>

                    <h1 className="homeTitle">
                        Search your Destination
                    </h1>
            <div className="auth-form-container1">
        <form className="bookForm">
            <div className="homeContent">
                <div className="textDiv">

                    
                    
                    <div>
                      <label htmlFor="City">Route:</label>
                     <select id="tripDirectionSelect" onChange={handleTripDirectionChange} value={tripDirection} className="select-style">
                        <option value="">Select a trip direction</option>
                        <option value="CDO-DAVAO">CDO-DAVAO</option>
                        <option value="DAVAO-CDO">DAVAO-CDO</option>
                     </select>
                    </div>

                    <div>
                    
                    <label htmlFor="Category">Category</label>
                    <select id="SeatCategorySelect">
                        <option value="">Select a seat category</option>
                        <option value="AC">AC</option>
                        <option value="General">General</option>
                    </select>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="City">Source:</label>
                        <input type="text" placeholder='Enter Source'></input>
                    </div>

                  <div className="destinationSelect">
                    <label htmlFor="Destination">Destination: </label>
                    <select id="destinationSelect" className="input flex">
                        <option value="">Select Destination</option>
                        <option value="CDO-DAVAO">Cagayan de Oro</option>
                        <option value = "CDO-DAVAO">Malaybalay</option>
                        <option value = "CDO-DAVAO">Valencia</option>
                        <option value = "CDO-DAVAO">Quezon</option>
                        <option value = "CDO-DAVAO">Lorega</option>
                        <option value = "CDO-DAVAO">Buda</option>
                        <option value = "CDO-DAVAO">Mintal</option>
                        <option value = "CDO-DAVAO">Davao</option>
                    </select>
                  </div>

                    <div>
                        <label htmlFor="City">Train Name:</label>
                        <select id="trainNumberSelect" onChange={handleTrainNumberChange} value={trainNumber} className="select-style">
                            <option value="">Select a train name</option>
                            {filteredTrainNumbers.map((trainNumber) => (
                            <option key={trainNumber} value={trainNumber}>
                                Train {trainNumber}
                            </option>
                            ))}
                        </select>

                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Date:</label>
                        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={dateRange.minDate} max={dateRange.maxDate}></input>
                    </div>

                    <div>
                        <label htmlFor="City">Time:</label>
                        <select id="select-style">
                            <option value="departTime">Select a departure time</option>
                            {timeIntervalOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <button id="bookBtn" onClick={handleNextPage}>Proceed to Next</button>

                </div>

            </div>
            </form>
        </div>
        <h1 className="homeTitle">Passenger</h1>
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
          <p id ="or"> OR </p>
          <button className="bookBtn" onClick={() => props.onFormSwitch('Book')}>Back</button>



      </div>
        </section>
        


        
    )
}


 

  
      
 
