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
        fetch('http://gymnoray.com/wp-json/wp/v2/media')
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
                <li key={id.id}>
                    <a href={id.guid.rendered}>{id.title.rendered}
                    <img width="50" height="50" src={id.guid.rendered} alt={id.title.rendered} title={id.title.rendered} />
                    </a>
                </li>
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
    id: React.PropTypes.number,
    rendered: React.PropTypes.string
};