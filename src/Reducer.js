const name = sessionStorage.getItem('name') || ""
const username = sessionStorage.getItem('username') || ""
const initialState ={name,username}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addData":
      return action.payload;
    default:
      return state;
  }
};
