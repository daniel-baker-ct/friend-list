export function friendsFormattedForList(friends) {
    if (friends && friends.length > 0) {
        return friends.map(friend => {
            return {
                id: friend.id,
                name: friend.firstName + ' ' + friend.lastName,
                birthday: friend.birthday,
                location: friend.location
            };
        });
    }    
}