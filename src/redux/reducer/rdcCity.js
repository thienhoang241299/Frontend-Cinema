import { SET_CITY } from "../action/actCity"

const initialState = {
    lsCity: []
}
const rdcCity = (state = initialState, {type,payload}) =>{
    switch(type){
        case SET_CITY:
            return {
                ...state,
                lsCity: payload
            }
        default: 
            return state;
    }
}
export default rdcCity;