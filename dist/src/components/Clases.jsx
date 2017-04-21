import React from 'react'
import ItemClases from './ItemClases'
import HeaderClases from './HeaderClases'
import FilterClases from '../actions/FilterClases'

class Clases extends React.Component {
    render() {
        console.log(this.props.data[0]);

        // Establecer fecha para listar el array
        let  Horas = new Date().getHours(),
        Minutos = new Date().getMinutes(),
        diaHoy =  new Date().getDay();
        if (Horas.length <= 2) { Horas = '0'+Horas}
        if (Minutos.length < 2) { Minutos = '0'+Minutos}
        let HoraActual = Horas + ':' + Minutos;

        console.log(Horas, Minutos, HoraActual);

        // Montar Array con las clases separadas por cada dia de la semana
        let filterList = {};
        for (let i = 0; i<7 ; i++) {
            filterList[i] = this.props.data[i].map((dayList) => dayList);
        }
        console.log(filterList[0],'\n', filterList[1],'\n', filterList[2],'\n', filterList[3],'\n', );
        // Filtro que debe devolver el array del dia de la semana en curso
        const listafiltrada = filterList[diaHoy].reduce((semana) => semana).filter((dia => {
            if (dia.hora > HoraActual) {
                console.log(dia.hora, HoraActual);
                return dia } else { return false }
        })).map((hora => hora));
        console.log(listafiltrada[0].hora, HoraActual);
        let finMinutos = parseInt(listafiltrada[0].hora.substr(3,2),10),
        finHoras = parseInt(listafiltrada[0].hora.substr(0,3),10),
        minutosRestantes = finMinutos - Minutos,
        horasRestantes = finHoras - Horas,
        proximaclase = listafiltrada[0].actividad;

        if (minutosRestantes < 0) { minutosRestantes += 60}

        return  (
            <div>
                <HeaderClases
                    proximaclase={proximaclase}
                    horasrest={horasRestantes}
                    minrest={minutosRestantes}/>
                <FilterClases />
                <ItemClases
                    data={listafiltrada}
                    proximaclase={proximaclase}
                />
            </div>
        )
    }
}

export default Clases
