import React from 'react'
// import TimeClases from '../data/TimeClases'

class ListaClases extends React.Component {
    render() {
        console.log(this.props.data);
        let Fecha = new Date();
        let HoraActual = Fecha.getHours();
        console.log(HoraActual);
        // const listaclases = [];
        // function filtarclases(obj) {
        //     if ('Hora' in obj && obj.Hora > HoraActual) {
        //         console.log('El objeto es ', obj.Hora);
        //     }
        // }
        // let filtro = TimeClases.filter(filtarclases);
        // console.log(filtro);
        // const { data } = this.props;
        const clasesList = this.props.data.map(clase => {
                return (
                    <tr key={clase.id}>
                        <td>{clase.actividad}</td>
                        <td><img src={clase.imagen} alt={clase.actividad} title={clase.actividad} /> </td>
                        <td>{clase.dia}</td>
                        <td>{clase.hora}</td>
                        <td><button href={clase.enlace}>Apuntarme</button></td>
                    </tr>
                )
        });
        return (
            <div>
                <h1>No te pierdas la próxima clase en {this.props.horasrest} horas y {this.props.minrest} minutos</h1>
                <table>
                    <tbody>
                        <tr width="100%">
                            <th width="20%">Actividad</th>
                            <th width="60%">Imagen</th>
                            <th width="40%">Fecha</th>
                            <th width="30%">Hora</th>
                            <th width="20%">Enlace</th>
                        </tr>
                            {clasesList}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListaClases;