import React from 'react'
import ListaClases from './ListaClases'

class Clases extends React.Component {
    render() {
        // Establecer fecha para listar el array
        let Fecha = new Date();
        let HoraActual = Fecha.getHours() + ':' + Fecha.getMinutes();
        let diaHoy = Fecha.getDay();

        // Montar Array con las clases separadas por cada dia de la semana
        let filterList = new Array(7);
        filterList[0] = this.props.data.map(dia => dia.lunes);
        filterList[1] = this.props.data.map(dia => dia.lunes);
        filterList[2] = this.props.data.map(dia => dia.Martes);
        filterList[3] = this.props.data.map(dia => dia.Miercoles);
        filterList[4] = this.props.data.map(dia => dia.Jueves);
        filterList[5] = this.props.data.map(dia => dia.Viernes);
        filterList[6] = this.props.data.map(dia => dia.Sabado);

        // Filtro que debe devolver el array del dia de la semana en curso
        const listafiltrada = filterList[diaHoy].filter((hora) => hora).reduce(item => item);

        let inicioMinutos = parseInt(HoraActual.substr(2,2),10);
        let inicioHoras = parseInt(HoraActual.substr(0,3),10);
        let finMinutos = parseInt(listafiltrada[0].hora.substr(3,2),10);
        let finHoras = parseInt(listafiltrada[0].hora.substr(0,3),10);

        let transcurridoMinutos = finMinutos - inicioMinutos;
        if (transcurridoMinutos < 0) {
            transcurridoMinutos += 60;
        }

// TODO revisar los resultados para las clases que empiezan a :30 y cuenta 1 hora.

        let transcurridoHoras = finHoras - inicioHoras;
        if (transcurridoMinutos > 30) {
            transcurridoHoras -= 1
        }
        console.log(finHoras, inicioHoras, transcurridoHoras);

        if(transcurridoHoras < 1) {
            transcurridoHoras = ''
        } else {
            transcurridoHoras += ' horas'
        }
        let horas = transcurridoHoras.toString();
        let minutos = transcurridoMinutos.toString();
        console.log(horas, minutos);
        if (horas.length < 2) {
            horas = "0"+horas;
        }


        let proximaclase = listafiltrada[0].actividad;
        const clasesList = listafiltrada.map(function(hora) {
            return hora;
            }).filter(function (clase) {
                if (clase.hora < HoraActual) {
                    console.log('la clase va a comenzar', clase.hora, '\n Son las', HoraActual );
                    return clase
                } else {
                    console.log('la clase va a comenzar');
                    return false
                }
        }
        );
        return(
            <div>
                <ListaClases data={clasesList} proximaclase={proximaclase} horasrest={transcurridoHoras} minrest={transcurridoMinutos}/>
            </div>
        )
    }
}

export default Clases
