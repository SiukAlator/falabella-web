import React from 'react'
import { connect } from 'react-redux'
import Renta from '../Renta';
import ReactDOM from 'react-dom';
import BoxPromocional from './BoxPromocional'
import MessageResponsive from './MessageResponsive'

const FormBody = ({ stateIn, setRut, setEmail, setPhone, callRenta }) => (
    
    <div className="FormBody">
        <MessageResponsive />
        <div className="boxFormMain">
            <div className="contentBox">
                <div className="titleBox"><span className="titleGreen">Ingresa </span>tus datos.</div>
                <div className="subTitleBox">Solo necesitas tener tu cédula para<br />realizar tu solcitud.</div>

                <div className="titleInput">Rut</div>
                <input className="inputBox" onChange={(e) => setRut(e.target.value, stateIn)} placeholder="Ej: 11.111.111-1" />
                <div className="titleInput">Celular</div>
                <input className="inputBox" onChange={(e) => setPhone(e.target.value, stateIn)} placeholder="Ej: 987654321" />
                <div className="titleInput">Correo electrónico</div>
                <input className="inputBox" onChange={(e) => setEmail(e.target.value, stateIn)} placeholder="Ej: correo@correo.cl" />

                <button name="button1" className="buttonBox" onClick={() => callRenta()} disabled={stateIn.button1}>CONTINUAR</button>
            </div>

            <BoxPromocional />
        </div>
    </div>

)

const mapStateToProps = state => ({
    stateIn: state,
    isDisabled: true
})

const mapDispatchToProps = dispatch => ({
    componentWillMount() {
        
    },
    setRut(rut, state) {
        dispatch({
            type: "SET_RUT",
            rut
        })
    },
    setPhone(phone, state) {
        dispatch({
            type: "SET_PHONE",
            phone
        })
    },
    setEmail(email, state) {
        dispatch({
            type: "SET_EMAIL",
            email
        })
    },
    callRenta() {

        ReactDOM.render(<Renta />, document.getElementById('root'));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormBody)