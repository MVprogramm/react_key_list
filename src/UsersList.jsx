import React from 'react';

import User from './User.jsx';

import './usersList.scss';

class UsersList extends React.Component {
  state = {
    sorting: null
  }

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc'
      ? 'desc'
      : 'asc';

    this.setState({
      sorting: newSorting
    })
  }

  render() {
    let usersList;
   
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => this.state.sorting === 'asc'
                          ? a.age - b.age
                          : b.age - a.age
        );
    } else {
      usersList = this.props.users;
    }

    usersList.map(
      user => user['id'] = Math.random()
    )

    return (
      <div>
        <button className='btn' onClick={this.toggleSorting}>
          { this.state.sorting || '-' }
        </button>

        <ul className='users'>
          { 
            usersList.map(
              user => (
                <User key={user.id} {...user} />
              )
            )
          } 
        </ul>
      </div>
    )
  }
};

export default UsersList;

