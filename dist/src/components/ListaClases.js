import React from 'react'
class ListaClases extends React.Component {
    render(){
        let lista = {};
        for (let i = 1; i < 7 ; i++) {
            lista[i] = this.props.clases[i].filter((item) => {
                if (item.actividad === this.props.clase){
                    return item.actividad
                } return false
            })
        }
        let clasesFiltradas = {};
        for (let i = 1; i < 7; i++){
            clasesFiltradas[i] = lista[i].map((item) => {
                return (
                    <li key={item.id} className="lista-clases">
                        <div className="horario">Los <strong>{item.hoy}</strong> a las <strong>{item.horaclase}</strong></div>
                        <div className="duracion">{item.duracion}</div>
                        <div className="sala">{item.sala}</div>
                    </li>
                );
            })
        }
        return (
            <div>
                <h3>{this.props.clase}</h3>
                <ul className="container-clases">{clasesFiltradas[1]}</ul>
                <ul className="container-clases">{clasesFiltradas[2]}</ul>
                <ul className="container-clases">{clasesFiltradas[3]}</ul>
                <ul className="container-clases">{clasesFiltradas[4]}</ul>
                <ul className="container-clases">{clasesFiltradas[5]}</ul>
                <ul className="container-clases">{clasesFiltradas[6]}</ul>
            </div>
        )
    }
}

export default ListaClases
