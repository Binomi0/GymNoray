import React from 'react'

export default class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            currentType: 'posts',
            data: [],
        };
        let idSet = [];
        fetch('http://gymnoray.com/wp-json/wp/v2/' + this.state.currentType)
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                for (let i = 0; i < json.length; i++) {
                    idSet = json[i].id
                }
                console.log(idSet)
                this.setState({
                    data: json,
                    id: json
                });
            });


    }

    componentWillMount() {
        console.log('El componente se va a montar');

    }

    componentDidMount() {
        console.log('El componente se ha montado');

    }

    onChangePage(type) {
        console.log(type);
        fetch('http://gymnoray.com/wp-json/wp/v2/' + type)
            .then( (response) => {
                return response.json() })
            .then( (json) => {

                this.setState({
                    data: json,
                    id: json
                });
            });
    }

    render () {
        const data = this.state.data;
        const gymposts = data.map(item => {
            return (
                <li key={item.id}>
                    <section>
                        <a href={item.link}>
                            <h2>{item.title.rendered}</h2>
                        </a>
                        <img width="100" height="100" src={item} alt={item.title.rendered} title={item.title.rendered}/>
                        <div></div>
                    </section>
                </li>
            );
        });
        return (
            <div>
                <h1>Clases Colectivas</h1>
                <button onClick={() => this.onChangePage('pages')}>Pages</button>
                <button onClick={() => this.onChangePage('posts')}>Posts</button>
                <ul>{gymposts}</ul>
            </div>
        )
    }
}

Slider.PropTypes = {
    rendered: React.PropTypes.string,
    current: React.PropTypes.string,
    data: React.PropTypes.string,
};