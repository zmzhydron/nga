const initState = {
  name: 'zmz',
  age: 30,
  health: 'a'
}
const reducerWrapper = obj => (state = initState, action) => {
  let fn = obj[action.type];
  if(fn&&typeof fn === 'function'){
    return fn(state, action);
  }else{
    return state;
  }
}

export default reducerWrapper({
  changebbbname: (state, action) => {
    return {
      ...state,
      name: action.value
    }
  },
  changebbbage: (state, action) => {
    return {
      ...state,
      age: action.value
    }
  },
  changebbbhealth: (state, action) => {
    return {
      ...state,
      health: action.value
    }
  }
});
