import React from 'react'

export default class HeaderClases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horasrest: this.props.horasrest,
            minrest: this.props.minrest,
            proximaclase: this.props.proximaclase
        };

    }

    componentWillMount() {
        setInterval(() =>
                this.setState({
                    minrest: this.state.minrest - 1
                }), 60000)
    }

    componentDidMount(){
        if (this.state.horasrest <= 0 && this.state.minrest <= 0) {
            alert('La clase ha empezado');
        }
    }


    render () {
        let quitarhora = this.state.horasrest;
        if (quitarhora < 1) {
            quitarhora = ''
        } else {
            quitarhora += ' h'
        }
        return  <h3>Próxima clase de {this.state.proximaclase} en {quitarhora} {this.state.minrest} mins</h3>
    }
}

