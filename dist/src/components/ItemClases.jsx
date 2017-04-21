import React from 'react'

class ItemClases extends React.Component {
    render() {
        const clasesList = this.props.data.map(clase =>
            <tr key={clase.id}>
                <td>{clase.actividad}</td>
                {/*<td><img src={clase.imagen} alt={clase.actividad} title={clase.actividad} /> </td>*/}
                <td>{clase.hora}</td>
                <td><button className="clases__button full" href={clase.enlace}>Apuntarme</button></td>
            </tr>);
        return (
            <div>

                <table>
                    <tbody>
                    <tr className="clases__title" width="100%">
                        <th width="20%">Actividad</th>
                        {/*<th width="60%">Imagen</th>*/}
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
export default ItemClases;