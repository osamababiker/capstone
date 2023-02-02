import { render, screen } from '@testing-library/react';
import App from './App';
import Booking from './pages/booking';
import BookingForm from './pages/booking/components/BookingForm';
import { initializeTimes, dateTimeReducer } from './dateTimeReducer';


test('Renders the BookingForm heading', () => {
  render(<Booking />);
  const headingElement = screen.getByText("Book a table at Little Lemon");
  expect(headingElement).toBeInTheDocument();
})

let reducerFunction = jest.fn().mockReturnValue([]);
test('Check the value for init times and update times', () => {
  expect(initializeTimes()).toEqual(['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30']);
});

describe("Booking table Form", () => {
  test("test booking table form validation", () => {
    const date = new Date();
    const resTime = '';
    const occasion = '';
    const guests = '';
    
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit}/>);

    const submitButton = screen.getByTestId("bookingFormBtn");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenLastCalledWith({
      date,
      resTime,
      occasion,
      guests
    });

  });
});