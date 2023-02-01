

function BookingForm() {
  return (
    
    <section className="booking-form">
    <h2> Book a table at Little Lemon  </h2>
    <form action="#">
        <div className="input-group">
            <label for="booking_date">Choose the booking date</label>
            <input type="date" name="booking_date" id="booking_date" />
        </div>
        <div className="input-group">
            <label for="booking_time">Choose the booking time</label>
            <input type="time" name="booking_time" id="booking_time" />
        </div>
        <div className="input-group">
            <label for="occasion">Select the occasion</label>
            <select name="occasion" id="occasion">
                <option value="birthday">birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>
        </div>
        <div className="input-group">
            <label for="attendees">Enter the number of attendees</label>
            <input type="number" name="attendees" id="attendees" />
        </div>
        <div className="input-group">
            <button className="">Book a table</button>
        </div>
    </form>
</section>
  )
}

export default BookingForm