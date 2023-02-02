import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingForm from "./components/BookingForm";

function Booking() {

  return (
    <>
        <Header />
          <main>
            <section className="booking-form">
              <h2> Book a table at Little Lemon </h2>
              <BookingForm />
            </section>
          </main>
        <Footer />
    </>
  )
}

export default Booking