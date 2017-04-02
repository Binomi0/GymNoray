import React from 'react'
// import Header from '../components/Header'

export default class JsonData extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log("El componente JsonData ha sido montado");
        fetch('http://gymnoray.com/wp-json/wp/v2/users')
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                this.setState({posts: json});
            });
    }
    render () {
        const data = this.state.posts;
        const listaposts = data.map(id => {
            return (
                <li key={id.id}>{id.link}</li>
            );
        });
        return (
            <ul>
                {listaposts}
            </ul>
        )
    }
}

JsonData.PropTypes = {
    posts: React.PropTypes.string,
    id: React.PropTypes.number
};