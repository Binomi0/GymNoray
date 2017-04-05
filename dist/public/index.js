import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './c'

export default class Slider extends React.Component {
    render () {
        return (
        <div>
            <img src="img/portada-1.jpg" />
        </div>
        )
    }

}

ReactDOM.render (
    <Slider />, document.getElementById('slider')
);
ReactDOM.render(Slider, document.getElementById('sliderportada'))




