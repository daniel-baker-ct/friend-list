import React, { PropTypes } from 'react';
import FriendListRow from './FriendListRow';

const FriendList = ({ friends }) => {
    return (
        <div>
            {friends && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friends.map(friend =>
                            <FriendListRow key={friend.id} friend={friend} />
                        )}
                    </tbody>
                </table>
            }
            {!friends &&
                <div className="jumbotron">
                    <h1>You've got no friends :(</h1>
                    <p>Add some!</p>
                </div>}
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
};

export default FriendList;