import React from 'react';

class LinkRepo extends React.Component {
  render() {
    let url = this.props.repo.owner.login + '/' + this.props.repo.name;
    return (
        <div>
        <h2>{url}</h2>
        <p>{this.props.repo.description}</p>
        <p><small>{this.props.repo.updated_at} Watchers</small></p>
        </div>
    );
  }
};


export default LinkRepo;