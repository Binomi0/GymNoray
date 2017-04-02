import React from 'react';
import './App.css';
import {Home} from './components/Home'
import Header from './components/Header'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    };

    onGreet() {
        alert('HOLA');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        })
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render () {
        let homeCmp = "";
        if (this.state.homeMounted){
            homeCmp =  (
                <Home
                    name={"Adolfo"}
                    edadInicial={39}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            )
        }
        return (
            <div>
                <div>
                    <Header homeLink={this.state.homeLink}/>
                </div>
                <div>
                    {homeCmp}
                </div>
                <div>
                    <button onClick={this.onChangeHomeMounted.bind(this)}>Desmontar componente</button>
                </div>

            </div>
        );
    }
}

export default App