import React from 'react'


class JsonData extends React.Component {
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
    render() {

        const dataposts = this.state.posts;
        const datapages = this.state.pages;
        const datamedia = this.state.media;
        const gymposts = dataposts.map(item => {return <li key={item.id}>{item.title}</li>});
        const gympages = datapages.map(item => {return <li key={item.id}>{item.title}</li>});
        const gymmedia = datamedia.map(item => {return <li key={item.id}>{item.title}</li>});
        return (
            <div>
                <ul>{gymposts} </ul>
                <ul> {gympages}</ul>
                <ul> {gymmedia}</ul>
            </div>
        )
    }
}



export default JsonData;

