import React from 'react'

class ListaClases extends React.Component {
    render() {
        let quitarhora = this.props.horasrest;
        if (quitarhora === 1) {
            quitarhora = ''
        }
        const clasesList = this.props.data.map(clase => {
                return (
                    <tr key={clase.id}>
                        <td>{clase.actividad}</td>
                        <td><img src={clase.imagen} alt={clase.actividad} title={clase.actividad} /> </td>
                        <td>{clase.hora}</td>
                        <td><a href={clase.enlace}>Apuntarme</a></td>
                    </tr>
                )
        });
        return (
            <div>
                <h1>No te pierdas la próxima clase de {this.props.proximaclase} en {quitarhora} {this.props.minrest} minutos</h1>
                <table>
                    <tbody>
                        <tr width="100%">
                            <th width="20%">Actividad</th>
                            <th width="60%">Imagen</th>
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