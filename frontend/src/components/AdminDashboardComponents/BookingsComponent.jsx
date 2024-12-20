import { useState } from "react";
import axios from "axios";
import Booking from "../../components/Booking/Booking";
import { toast } from "react-toastify";

const BookingsComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2024);

  const fetchBookings = () => {
    axios
      .get(`http://localhost:3000/appointments/month/`, {
        headers: {
          token: localStorage.getItem("token"),
          year: year,
          month: month,
        },
      })
      .then((response) => {
        setBookings(response.data.appointments);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  };

  const handleCancelBooking = (bookingId) => {
    axios
      .delete(`http://localhost:3000/appointments/cancel`, {
        headers: {
          token: localStorage.getItem("token"),
          appointmentId: bookingId,
        },
      })
      .then(() => {
        fetchBookings();
        toast.success("Booking canceled successfully!");
      })
      .catch((error) => {
        console.error("Error canceling booking:", error);
        toast.error("Failed to cancel booking!");
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchBookings();
        }}
      >
        <div className="mb-3">
          <label className="form-label">Month</label>
          <input
            type="number"
            className="form-control"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="Enter month (1-12)"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Fetch Bookings
        </button>
      </form>

      <div className="row mt-4">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div className="col-md-3 mb-3 d-flex flex-column" key={booking._id}>
              <Booking
                bookerName={booking.months.days.times.appointment.user}
                service={booking.months.days.times.appointment.service}
                bookingDate={booking.months.days.times.appointment.date}
                cost={booking.months.days.times.appointment.cost}
              />
              <button
                className="btn btn-danger mt-2"
                onClick={() => handleCancelBooking(booking._id)}
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <div>No bookings available for this month and year</div>
        )}
      </div>
    </div>
  );
};

export default BookingsComponent;
