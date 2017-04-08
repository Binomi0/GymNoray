import React from 'react'
import ListaClases from './ListaClases'

class Clases extends React.Component {
    render() {
        // Establecer fecha para listar el array
        let Fecha = new Date();
        let HoraActual = Fecha.getHours() + ':' + Fecha.getMinutes();
        let diaHoy =  2; //Fecha.getDay();

        // Montar Array con las clases separadas por cada dia de la semana
        let filterList = new Array(7);
        filterList[0] = this.props.data.map(dia => dia.lunes);
        filterList[1] = this.props.data.map(dia => dia.lunes);
        filterList[2] = this.props.data.map(dia => dia.Martes);
        filterList[3] = this.props.data.map(dia => dia.Miercoles);
        filterList[4] = this.props.data.map(dia => dia.Jueves);
        filterList[5] = this.props.data.map(dia => dia.Viernes);
        filterList[6] = this.props.data.map(dia => dia.Sabado);

        // console.log(filterList[diaHoy]);  // Devuelve el array del dia en curso

        // Filtro que debe devolver el array del dia de la semana en curso
        const listafiltrada = filterList[diaHoy].reduce((semana) => semana).filter((dia => {
            if (dia.hora > HoraActual) { return dia  } else { return false}
        })).map((hora => hora));
        let inicioMinutos = parseInt(HoraActual.substr(3,2),10);
        let inicioHoras = parseInt(HoraActual.substr(0,3),10);
        let finMinutos = parseInt(listafiltrada[0].hora.substr(3,2),10);
        let finHoras = parseInt(listafiltrada[0].hora.substr(0,3),10);

        let minutosRestantes = finMinutos - inicioMinutos;
        if (minutosRestantes < 0) { minutosRestantes += 60; }

        let horasRestantes = finHoras - inicioHoras;
        if (minutosRestantes > 30) { horasRestantes -= 1  }

        if(horasRestantes <= 1) { horasRestantes = '' } else { horasRestantes += ' horas'  }
        let horas = horasRestantes.toString();
        if (horas.length < 2) { horas = "0"+horas; }

        /* 
        *  Pasa la lista filtrada al componente via props
        */
        let proximaclase = listafiltrada[0].actividad;
        const clasesList = listafiltrada.map(function(clase) {
            if (clase.hora > HoraActual) {
                return clase
            } else {
                return false
            }
        });
        return(
            <div>
                <ListaClases data={clasesList}
                             proximaclase={proximaclase}
                             horasrest={horasRestantes}
                             minrest={minutosRestantes}/>
            </div>
        )
    }
}

export default Clases
