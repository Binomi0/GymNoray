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
                    console.log(json[0].title);
                    this.setState({
                        media: json,
                    });
                });
                return pages.json()
            })
            .then((json) => {
                console.log(json[0].title);
                this.setState({
                    pages: json,
                });
            });
            return posts.json()
        })
        .then((json) => {
            console.log(json[0].title);
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
                    media: json.id,
                    posts: json
                });
            });
    }

    render () {
        // this.setState({data: [{ posts:this.state.posts, pages:this.state.pages, media:this.state.media}] });
        //console.log('El componente se ha montado con este ARRAY (POSTS)', this.state.posts);
        // console.log('El componente se ha montado con este ARRAY (PAGES)', this.state.pages);
        // console.log('El componente se ha montado con este ARRAY (MEDIA)', this.state.media);
        const dataposts = this.state.posts;
        const gymposts = dataposts.map(item => {
            return (
                <li key={item.id}>
                    <section>
                        <a href={item.id} src={this.state.media}>
                            <h2>{item.title.rendered}</h2>
                        </a>
                        <img width="50" height="50" src="" alt=""/>
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
            </div>
        )
    }
}

Slider.PropTypes = {
    rendered: React.PropTypes.string,
    current: React.PropTypes.string,
    dataposts: React.PropTypes.string,
};