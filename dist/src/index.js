import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Banner from './components/Banner'
import Clases from './components/Clases'
import TimeClases from './data/TimeClases'


ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <Clases data={TimeClases} />,
    document.getElementById('sliderproductos')
);


