import React from 'react'
import ListaClases from './ListaClases'

class FormClases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: '',
            clases: props.clases[1],
            lista: props.listaOrdenada,

        }
    }
    selectUpdate() {
        let valor = this.refs.selectClases.value;
        this.setState({ clase: valor });
    }

    render() {
        let actividades = {};
        for (let i = 0; i < this.state.lista.length; i++) {
            actividades = this.state.lista.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            })
        }
        return (
            <div className="titulo">
                <form onChange={this.selectUpdate.bind(this)}>
                        <label>Listado de clases </label>
                        <select ref="selectClases">{actividades}</select>

                </form>
                <ListaClases clase={this.state.clase} clases={this.props.clases} />
            </div>
        )
    }
}
export default FormClases