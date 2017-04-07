import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            src: '/img/portada-',
            title: 'GymNoray'
        };
        setInterval(() => {
            this.setState({
                counter: Math.floor((Math.random() * 5) + 1)
            })
        }, 10000);
    }

    static componentWillMount(){
        console.log('El componente se montará')
    }

    static componentDidMount(){
        console.log('El componente se ha montado')
    }

    static componentWillUnmount(e){
        e.preventDefault();
        console.log('El componente se desmontará')
    }

    render () {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={100}
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={3000}>
                    <img src={this.state.src + this.state.counter + '.jpg'} alt={this.state.title} title={this.state.title}/>
                </ReactCSSTransitionGroup>
                <div className="copy l-40">
                    <h2 className="copy__title">Box Gym Noray<span> Te regalamos una semana ¡GRATIS!</span></h2>
                    <p className="copy__description">Ven a conocer nuestro Box con nuevas máquinas y servicios para que entrenes al máximo nivel, en un gran ambiente.</p>
                    <a onClick={this.componentWillUnmount} className="copy__button" id="myAnchor">¡Reserva ya tu plaza!</a>
                </div>
            </div>
        )
    }
}

Banner.PropTypes = {
    counter: React.PropTypes.number,
    title: React.PropTypes.string,
    src: React.PropTypes.string
};