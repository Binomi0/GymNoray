import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Banner from './components/Banner'
import Clases from './components/Clases'
// import TimeClases from './data/TimeClases'
import data from './data/data'


ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <Clases data={data} />,
    document.getElementById('sliderproductos')
);


