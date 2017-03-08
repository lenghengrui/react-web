
const initialState = {
  color: 'black',
  num: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'yellow':
      console.log(action.type, Object.assign(state, {color: action.color}));
      return Object.assign(state, {color: action.color});

    case 'green':
      Object.assign(state, {
        color: action.color
      });
      console.log(action.type, state);
      return state;

    case 'add': 
      Object.assign(state, {
        num: state.num + 1
      });
      console.log(action.type, state);
      return state;

    case 'de': 
      Object.assign(state, {
        num: state.num - 1
      });
      console.log(action.type, state);
      return state;
  
    default:
      return state;
  }
};