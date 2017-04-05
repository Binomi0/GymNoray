import React from 'react'


class JsonData extends React.Component {
    render() {
        console.log(this.props.data);
        // llamada = fetch('http://gymnoray.com/wp-json/wp/v2/posts')
        //     .then( (response) => {
        //         return response.json() })
        //     .then( (json) => {
        //         return json;
        //         console.log(json);
        //     });
        return (
            <h1>Hola Soy JsonData</h1>
        )
        }


    }



export default JsonData;

