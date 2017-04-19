import React from 'react'

class FilterClases extends React.Component {
    constructor() {
        super();
        this.state = {
            clase: 0,
        };
    }

    onHandleChange(event) {
        this.setState({
            clase: event.target.value
        })
    }


    render () {
        return (
            <div>
                <select value={this.state.clase} onChange={(event) => this.onHandleChange(event)}>
                    <option value="Zumba">Zumba</option>
                    <option value="Runing">Runing</option>
                    <option value="Pilates">Pilates</option>
                </select>
            </div>
        )
    }
}

export default FilterClases