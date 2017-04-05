import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Banner from './components/Banner'
import Slider from './components/Slider'
// import Posts from './data/Posts'
// import jsonStore from './actions/JsonStore'


ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <Slider />,
    document.getElementById('sliderproductos')
);


