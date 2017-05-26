const initialState = [
  {
    id: 1,
    user_id: 1,
    message: 'Text 1',
    date: new Date(),
  },
  {
    id: 2,
    user_id: 1,
    message: 'Text 2',
    date: new Date(),
  },
  {
    id: 3,
    user_id: 2,
    message: 'Text 3',
    date: new Date(),
  },
  {
    id: 4,
    user_id: 1,
    message: 'Text 4',
    date: new Date(),
  },
  {
    id: 5,
    user_id: 2,
    message: 'Text 5',
    date: new Date(),
  },
];


/**
 * Messages
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
const messages = (state = initialState) => (state);

export default messages;
