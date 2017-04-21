import React from 'react'
import '../App.css';
import JsonData from '../actions/JsonStore'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Titulo de la pagina</h1>
                    <button></button>
                </div>
                <div>
                    <JsonData />
                </div>
            </div>
        )
    }
}