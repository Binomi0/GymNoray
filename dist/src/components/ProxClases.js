import React from 'react'

class ProxClases extends React.Component {
    render () {
        let { hoy } = this.props;
        switch (hoy) {
            case 0:
                hoy = "Domingo";
                break;
            case 1:
                hoy = "Lunes";
                break;
            case 2:
                hoy = "Martes";
                break;
            case 3:
                hoy = "Miercoles";
                break;
            case 4:
                hoy = "Jueves";
                break;
            case 5:
                hoy = "Viernes";
                break;
            case 6:
                hoy = "Sabado";
                break;
            default:
                hoy = "Esperando dia de la semana";
                break;
        }
        let clasesHoy = this.props.clasesHoy.map((item, i) => {
            let items = this.props.clasesHoy.length;
            let anchoimg = parseInt(400/items,10);
            console.log(anchoimg);

            return (
                <li key={i} className="lista-clases">
                    <div className="lista-clases__img">
                        <img width={anchoimg+'%'} src="http://lorempixel.com/200/300/sports" alt={item.actividad}></img>
                    </div>
                    <div className="item_clases">
                        <div className="horario"><strong>{item.actividad} </strong> a las <strong>{item.horaclase}</strong></div>
                        <div className="duracion">{item.duracion}</div>
                        <div className="sala">{item.sala}</div>
                    </div>

                </li>
            )
        });
        let clasesManana = this.props.clasesManana.map((item, i) => {
            return (
                <li key={i} className="lista-clases">
                    <div className="lista-clases__img"><img src="http://lorempixel.com/200/300/sports" alt={item.actividad}></img></div>
                    <div className="horario"><strong>{item.actividad}</strong> el <strong>{item.hoy}</strong> a las <strong>{item.horaclase}</strong></div>
                    <div className="duracion">{item.duracion}</div>
                    <div className="sala">{item.sala}</div>
                </li>
            )
        });
        return(
            <div>
                <h2>Clases disponibles para las próximas 24h</h2>
                <h4>Clases de hoy {hoy}</h4>
                <ul>{clasesHoy}</ul>
                <hr/>
                <h4>Mañana</h4>
                <ul>{clasesManana}</ul>
            </div>
        )
    }
}
export default ProxClases