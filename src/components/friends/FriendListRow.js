import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const FriendListRow = ({ friend }) => {
    return (
        <tr>
            <td><Link to={'/friend/' + friend.id}>{friend.name}</Link></td>
            <td>{friend.birthday}</td>
            <td>{friend.location}</td>
        </tr>
    );
};

FriendListRow.propTypes = {
    friend: PropTypes.object.isRequired
};

export default FriendListRow;