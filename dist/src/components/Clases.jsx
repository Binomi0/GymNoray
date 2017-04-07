import React from 'react'
import ListaClases from './ListaClases'

class Clases extends React.Component {
    constructor(props) {
        let Fecha = new Date();
        let HoraActual = Fecha.getHours() + ':' + Fecha.getMinutes();
        super(props);
        this.state = {
            clases: this.props.data,
            HoraActual: HoraActual,
            minrest: '',
            horasrest: ''

        }

    }

    render() {
        let Fecha = new Date();
        let HoraActual = Fecha.getHours() + ':' + Fecha.getMinutes();

        const filterList = this.state.clases.map(hora => {
            return hora;
        }).filter(function (hora) {
            if (hora.hora > HoraActual) {
                // console.log('la clase va a comenzar', hora.hora, '\n Son las', HoraActual )
                return hora
            } else {
                // console.log('la clase va a comenzar')
                return false

            }
        });

        let proxClase = filterList[0].hora;
        console.log(proxClase);
        filterList.sort(function (a, b) {return a-b});


        let inicioMinutos = parseInt(this.state.HoraActual.substr(3,2),10);
        let inicioHoras = parseInt(this.state.HoraActual.substr(0,3),10);

        let finMinutos = parseInt(filterList[0].hora.substr(3,2),10);
        let finHoras = parseInt(filterList[0].hora.substr(0,3),10);

        let transcurridoMinutos = finMinutos - inicioMinutos;
        let transcurridoHoras = (finHoras - 1) - inicioHoras;
        if (transcurridoMinutos < 0) {
            transcurridoMinutos = 60 + transcurridoMinutos;
        }

        // let horas = transcurridoHoras.toString() ;
        // let minutos = transcurridoMinutos.toString();
        //
        // if (horas.length < 2) {
        //     // console.log('horas menos que 2 y mayor q 0', horas.length)
        //      horas = "0"+horas;
        // }
        // if (minutos.length < 2) {
        //      minutos = "0"+minutos;
        // }

        if(transcurridoHoras <= 1) {
            transcurridoHoras = ''
        }
        let minrest = transcurridoMinutos;

        const clasesList = filterList.map(function(hora) {
            return hora;
            }).filter(function (hora) {
                if (hora.hora > HoraActual) {
                    // console.log('la clase va a comenzar', hora.hora, '\n Son las', HoraActual )
                    return hora
                } else {
                    // console.log('la clase va a comenzar')
                    return false
                }
        }
        );

        return(
            <div>
                <ListaClases data={clasesList} horasrest={transcurridoHoras} minrest={minrest}/>
            </div>
        )
    }
}

export default Clases
