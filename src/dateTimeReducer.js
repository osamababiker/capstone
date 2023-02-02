import { fetchAPI, submitAPI } from "./api";

export const initializeTimes = () => {
    const date = new Date();
    let avilableTimes = fetchAPI(date);
    return avilableTimes;  
} 

// just return the init time for now
export const dateTimeReducer = (state, action) => {
    switch(action.type){
        case "initTime":
            return state;
        case "changeTime":
            return state;
        default: 
        return state;
    }
}