import React from 'react'


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            edad: props.edadInicial,
            status: 0,
            homeLink: props.initialLinkName, // no, mevoy a sobar, lee el tw
            posts: []
        };
        setInterval(() => {
            this.setState({
                status: !this.state.status
            });
        }, 3000);
        console.log("Constructor")
    }
    
    componentWillMount() {
        console.log("El componente se va a montar")
    }

    componentDidMount() {
        console.log("El componente se ha montado")
    }
    componentWillReceiveProps(nextProps){
        console.log("El componente va a recibir propiedades", nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("¿Debería actualizarse el componente?", nextProps, nextState)
        // if (nextState.status === 1) {
        //     return false
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("El componente se actualizará", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("El componente ha sido actualizado", prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("EL componente se va a desmontar")
    }

    onMakeOlder() {
        this.setState({
            edad: this.state.edad + 3
        })
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink:  event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Mi nombre es {this.props.name} y tengo {this.state.edad} años.</h3>
                <p>Status: {this.state.status}</p>
                <button onClick={this.props.greet}>Saludo</button>
                <ul>
                </ul>
                <button onClick={() => this.onMakeOlder()}>Incrementar edad</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)}>Cambiar else link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    edad: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};