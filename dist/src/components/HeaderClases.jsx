import React from 'react'

export default class HeaderClases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horasrest: this.props.horasrest - 1,
            minrest: this.props.minrest
        }
    }
    render () {
        console.log(this.state.horasrest, this.state.minrest);
        let quitarhora = this.state.horasrest
        if (quitarhora < 1) {
            quitarhora = ''
        } else {
            quitarhora += ' h'
        }
        return <h3>No te pierdas la próxima clase de {this.props.proximaclase} en {quitarhora} {this.props.minrest} mins</h3>
    }
}
