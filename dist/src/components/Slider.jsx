import React from 'react'

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: [],
            posts: [],
            pages: [],
            data: [{
                pages: [],
                posts: [],
                media: []
            }]
        };

        fetch('http://gymnoray.com/wp-json/wp/v2/posts')
            .then( (posts) => {
                fetch('http://gymnoray.com/wp-json/wp/v2/pages')
                    .then( (pages) => {
                        fetch('http://gymnoray.com/wp-json/wp/v2/media')
                            .then( (media) => {
                                return media.json()
                            })
                            .then((json) => {
                                console.log(json[0]);
                                this.setState({
                                    media: json,
                                });
                            });
                        return pages.json()
                    })
                    .then((json) => {
                        console.log(json[0]);
                        this.setState({
                            pages: json,
                        });
                    });
                return posts.json()
            })
            .then((json) => {
                console.log(json[0]);
                this.setState({
                    posts: json,
                });
            });
    }
    static componentWillMount() {
        console.log('El componente se va a montar' )
    }
    static componentDidMount() {
        console.log('El componente se ha montadocon este ARRAY')
    }

    onChangePage(type, postId) {
        console.log(type);
        fetch('http://gymnoray.com/wp-json/wp/v2/' + type)
            .then( (response) => {
                return response.json() })
            .then( (json) => {
                console.log(json[postId].title.rendered);
                this.setState({
                    media: json,
                    posts: json,
                    pages: json
                });
            });
    }

    render () {
        const imgsarray = this.state.media;
        const imgsdata = imgsarray.map(item2 => {
            return (
                <li key={item2.id}>
                    <img width="50px" height="50px" src={item2.source_url} alt={item2.alt_text} title={item2.title.rendered}/>
                </li>
            )
        });
        const dataposts = this.state.posts;
        const gymposts = dataposts.map(item => {
            return (
                <li key={item.id}>
                    <section>
                        <a href={item.link} src={this.state.media}>
                            <h2>{item.title.rendered}</h2>
                        </a>
                    </section>
                </li>
            );
        });
        return (
            <div>
                <h1>Clases Colectivas</h1>
                <button onClick={() => this.onChangePage('pages', 0)}>Pages</button>
                <button onClick={() => this.onChangePage('posts', 0)}>Posts</button>
                <button onClick={() => this.onChangePage('media', 0)}>Media</button>
                <ul>{gymposts}</ul>
                <ul>{imgsdata}</ul>
            </div>
        )
    }
}

Slider.PropTypes = {
    rendered: React.PropTypes.string,
    current: React.PropTypes.string,
    dataposts: React.PropTypes.string,
};