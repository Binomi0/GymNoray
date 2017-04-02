import React from 'react'
import '../App.css';
import JsonData from '../actions/JsonStore'

export default class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <h1>Titulo de la pagina</h1>
                    <button>{this.props.homeLink}</button>
                </div>
                <div>
                    <JsonData />
                </div>
            </div>
        )
    }
}