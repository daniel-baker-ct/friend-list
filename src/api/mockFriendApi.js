import delay from './delay';

const friends = [
  {
    id: 'testtesterson19900101',
    firstName: 'Test',
    lastName: 'Testerson',
    birthday: '1990-01-01',
    location: 'London'
  }
];

const generateId = (friend) => {
  return replaceAll(friend.firstName + friend.lastName + friend.birthday, '', '-');
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class FriendApi {
    static getAllFriends() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], friends));
        }, delay);
      });
    }
  
    static saveFriend(friend) {
      friend = Object.assign({}, friend);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const minNameLength = 1;
          if (friend.firstName.length < minNameLength) {
            reject(`First name must be at least ${minNameLength} characters.`);
          }
  
          if (friend.id) {
            const existingFriendIndex = friends.findIndex(a => a.id == friend.id);
            friends.splice(existingFriendIndex, 1, friend);
          } else {
            friend.id = generateId(friend);           
            friends.push(friend);
          }
  
          resolve(friend);
        }, delay);
      });
    }
  
    static deleteFriend(friendId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const indexOfFriendToDelete = friends.findIndex(friend => {
            friend.id == friendId;
          });
          friends.splice(indexOfFriendToDelete, 1);
          resolve();
        }, delay);
      });
    }
  }
  
  export default FriendApi;