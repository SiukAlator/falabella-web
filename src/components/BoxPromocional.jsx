import React from 'react'
import icoCMR from '../assets/resources/ico-cmr.png'
import opuCMR from '../assets/resources/opu.png'
import visaCMR from '../assets/resources/visa-blue-png-2.png'

const BoxPromocional = () => (
    <div className="boxPromocional">
        <center>
            <table className="titleInput formatTable">
                <tr>
                    <td>
                        <img src={icoCMR} className="imgIcon" alt=""></img>
                    </td>
                    <td >
                        <p>Acumula<br /><br /><b>CMR Puntos</b></p>
                    </td>
                    <td>
                        <img src={opuCMR} className="imgIcon" alt=""></img>
                    </td>
                    <td>
                        <p>Descuentos<br /><br />CMR Puntos</p>
                    </td>
                    <td>
                        <img src={visaCMR} className="imgIcon" alt=""></img>
                    </td>
                    <td>
                        <p>Compra en<br /><br />todo el mundo</p>
                    </td>
                </tr>
            </table>
        </center>
    </div>
)

export default BoxPromocional