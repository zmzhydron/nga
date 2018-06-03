const initState = {
  name: 'glz',
  age: 81,
  health: 'a-'
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
  changeaaaname: (state, action) => {
    return {
      ...state,
      name: action.value
    }
  },
  changeaaaage: (state, action) => {
    return {
      ...state,
      age: action.value
    }
  },
  changeaaahealth: (state, action) => {
    return {
      ...state,
      health: action.value
    }
  }
});
