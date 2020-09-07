import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import MessageResponsive from './MessageResponsive'

const FormRenta = ({ stateIn, setRenta, callAPI }) => (

    <div className="FormBody2">
        <MessageResponsive />
        <div className="boxFormMain2">
            <div className="contentBox">
                <div className="titleBox"><span className="titleGreen">Ayúdanos </span>con unos<br/>datos más</div>
                <div className="subTitleBox">Porque te queremos dar una oferta hecha a la medida para ti, necesitamos saber un poco más.</div>
                <div className="titleInput">¿Cuál es tu renta líquida/ingreso mensual?</div>
                <input className="inputBox" onChange={(e) => setRenta(e.target.value)} placeholder="Ej: $400.000" />

                <button className="buttonBox" onClick={() => callAPI(stateIn)} disabled={stateIn.button2}>CONTINUAR</button>
            </div>
        </div>
    </div>

)

const mapStateToProps = state => ({
    stateIn: state
})

const mapDispatchToProps = dispatch => ({
    setRenta(renta)
    {
        dispatch({
            type: "SET_RENTA",
            renta
        })

    },callAPI(stateIn)
    {
        let urlBase = process.env.URL_BASE || 'http://localhost:4000';
        let dummyToken = 'e817c8c863f6e39f1f77370305655551e4b5654d';
        axios({
            method: 'post',
            url: urlBase + '/api/evaluate',
            headers: {
                token: dummyToken
            }, 
            data: {
                "rut": stateIn.rut,
                "email": stateIn.email,
                "x-user-browser": navigator.appCodeName + ' - ' +navigator.appVersion,
                "phone": stateIn.phone,
                "renta": stateIn.renta,
                "x-user-os": navigator.platform
            }
          }).then(response => {
            if (response.data.code === "200")
                alert("Mensaje enviado con exito!");
            else
                alert('Ha ocurrido un error interno, favor intentar mas tarde');
        }).catch(function (error) {
            alert('Ha ocurrido de comunicación, favor intentar mas tarde');
          });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRenta)