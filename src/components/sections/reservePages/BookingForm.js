import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../../bookingsAPI";
const BookingForm = () => {
  const toast = {
    error: (msg) => console.log(msg),
  }

  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

  // Form state
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guestNum, setGuestsNum] = useState("");
  const [occasion, setOccasion] = useState("Anniversary");

  //  Submit form & redirect user
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!date) {
      toast.error("Please choose a date");
      return;
    }
    if (!time) {
      toast.error("Please choose a time");
      return;
    }
    if (guestNum < 1 || guestNum > 10) {
      toast.error("Please enter a number between 1 and 10");
      return;
    }
    if (!occasion) {
      toast.error("Please choose an occasion");
      return;
    }

    const formData = {
      date,
      time,
      guestNum,
      occasion,
    };
    const res = submitAPI(formData);

    if (res) {
      console.log('Reservation submitted successfully');
      navigate("/confirmation");
    }
  };

  //   Change availability based on choosen date
  useEffect(() => {
    if (date) {
      setAvailableTimes(fetchAPI(new Date(date)));
    }
  }, [date]);

  return (
    <form
      data-testid="booking-form"
      className="bookingForm"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Reservation Details</legend>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          id="res-time"
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <option value={t} key={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestNum}
          onChange={(e) => setGuestsNum(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </fieldset>
      <input
        className="reservation-button"
        type="submit"
        aria-label="Submit reservation form"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;