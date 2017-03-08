
const initialState = {
  color: 'black',
  num: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'yellow':
      return Object.assign({}, state, {color: action.color});

    case 'green':
       return Object.assign({}, state, {color: action.color});

    case 'add': 
      return Object.assign({}, state, {num: state.num + 1});

    case 'de': 
      return Object.assign({}, state, {num: state.num - 1});
    default:
      return state;
  }
};