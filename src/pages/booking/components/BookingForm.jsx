import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initializeTimes, dateTimeReducer } from "../../../dateTimeReducer";
import { fetchAPI, submitAPI } from "../../../api";
import { useFormik } from "formik";
import * as Yup from 'yup';

function BookingForm() {

    const formSchema = Yup.object().shape({
        date: Yup.date().required("please select date"),
        resTime: Yup.string().required("please select time"),
        occasion: Yup.string().required("please select occasion"),
        guests: Yup.number().required("please enter guests number"),
    });

    const formik = useFormik({
        initialValues: {
          date: new Date(),
          resTime: '',
          occasion: '',
          guests: ''
        },
        onSubmit: (values) => {
            let checkSubmit = submitAPI(JSON.stringify(values));
            if(checkSubmit){
                navigate('/bookingConfirmed');
            }
        },
        validationSchema : formSchema, 
      });

    const navigate = useNavigate();

    const updateTimes = (e) => {
        let times = fetchAPI(new Date(e.target.value));
        dispatch({ type: "changeTime", times });
    }

    const [availableTimes, dispatch] = useReducer(dateTimeReducer, initializeTimes());


  return (
    <form onSubmit={formik.handleSubmit} data-testid="bookingForm">
        <div className="input-group">
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                value={formik.values.date} 
                onChange={updateTimes} name="res-date" id="res-date" 
            />
            { formik.errors.date && formik.touched.date ?
                <div style={{ background: "#ff0000ad", color: "white", width: "60%", marginTop: "10px" }}>{formik.errors.date}</div>
            : null
            }
        </div>
        <div className="input-group">
            <label htmlFor="resTime">Choose time</label>
            <select 
                id="resTime" 
                name="resTime"
                onChange={formik.handleChange}
                value={formik.values.resTime}>
                {
                    availableTimes.map(time => (
                        <option key={time}>{time}</option>
                    ))
                }
            </select>
            { formik.errors.resTime && formik.touched.resTime ?
                <div style={{ background: "#ff0000ad", color: "white", width: "60%", marginTop: "10px" }}>{formik.errors.resTime}</div>
            : null
            }
        </div>
        <div className="input-group">
            <label htmlFor="occasion">Select the occasion</label>
            <select name="occasion" 
                onChange={formik.handleChange}
                value={formik.values.occasion}
                id="occasion">
                <option value="birthday">birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            { formik.errors.occasion && formik.touched.occasion ?
                <div style={{ background: "#ff0000ad", color: "white", width: "60%", marginTop: "10px" }}>{formik.errors.occasion}</div>
            : null
            }
        </div>
        <div className="input-group">
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                onChange={formik.handleChange}
                value={formik.values.guests}  
                name="guests" 
                id="guests" />
            { formik.errors.guests && formik.touched.guests ?
                <div style={{ background: "#ff0000ad", color: "white", width: "60%", marginTop: "10px" }}>{formik.errors.guests}</div>
            : null
            }
        </div>
        <div className="input-group">
            <button type="submit" data-testid="bookingFormBtn"  role="button">Book a table</button>
        </div>
    </form>
  )
}

export default BookingForm;