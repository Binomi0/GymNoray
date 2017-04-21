import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './components/Banner'
import data from './data/data2'
import App from './App'

ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <App data={data} />,
    document.getElementById('sliderproductos')
);

// ReactDOM.render (
//     <ProximaClase props={infoClase}/>,
//     document.getElementById('proximaClase')
// );
