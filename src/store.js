import { createStore } from 'redux'

const initialState = {
    rut: '',
    phone: '',
    email: '',
    renta: '',
    button1: true,
    button2: true
}

const reducer = (state = initialState, action) => {
    let flagBox1 = false;
    let flagBox2 = false;
    if (action.type === "SET_RUT") {
        state.rut = action.rut;
        flagBox1 = true;
    } else if (action.type === "SET_PHONE") {
        state.phone = action.phone;
        flagBox1 = true;
    } else if (action.type === "SET_EMAIL") {
        state.email = action.email;
        flagBox1 = true;
    } else if (action.type === "SET_RENTA") {
        state.renta = action.renta;
        flagBox2 = true;
    }
    if (flagBox1) {
        if (state.rut === "" || state.phone === "" || state.email === "")
            state.button1 = true;
        else
            state.button1 = false;
        return {
            ...state
        }
    }
    if (flagBox2) {
        if (state.renta === "")
            state.button2 = true;
        else
            state.button2 = false;
        return {
            ...state
        }
    }

    return state;
}

export default createStore(reducer)