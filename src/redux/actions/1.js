const aw = type => value => {
  return {
    type,
    value,
  }
}

export const changeaaaname = aw("changeaaaname");
export const changeaaahealth = aw("changeaaahealth");
export const changeaaaage = aw("changeaaaage");
// export const asyncChangeName = value => {
//   return function(dispatch) {
//     setTimeout(() => {
//       dispatch({
//         type: `changefathername`,
//         value: "GLZ996"
//       })
//     },1000);
//   }
// }
// export const asyncChangeNamePro = value => {
//   return function(dispatch) {
//     setTimeout(() => {
//       dispatch({
//         type: `changefathername`,
//         value: "GLZ996"
//       })
//     },1000);
//   }
// }