import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class FriendsPage extends Component {
    render() {
        const { friends } = this.props;

        return (
            <div>
                <h1>Friends</h1>
                <FriendsList/>
            </div>
        );
    }
}

FriendsPage.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendsPage;