// import expect from 'expect';
// import * as courseActions from '../actions/courseActions';
// import rootReducer from '../reducers';
// import initialState from '../reducers/initialState';
// import { createStore } from 'redux';

// describe('Store', () => {
//     it('should handle creating courses', () => {
//         //arrange
//         const store = createStore(rootReducer, initialState);
//         const course = {
//             title: "Clean Code"
//         };

//         //act
//         const action = courseActions.createCourseSuccess(course);

//         //assert
//         const actual = store.getState().courses[0];
//         const expected = {
//             title: "Clean Code"
//         };

//         expect(actual).toEqual(expected);
//     });
// });