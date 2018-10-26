export default (state=[], action) => {
  switch (action.type) {
    case 'GET_APPLICATIONS_SUCCESS':
      console.log("yesmate")
      return action.payload
    case 'GET_APPLICATIONS_ERROR':
      console.log("yesmate")
      return action.payload
    default:
      return state;
  }
}