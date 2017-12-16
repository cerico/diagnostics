const API_URL = `http://${window.location.host}/ports`
// const API_URL = `https://s3.eu-west-2.amazonaws.com/io1937/json/sample.json`


export const getApplications = () => {
  const endpoint = `${API_URL}`
  console.log(endpoint)
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setApplications(res)))
    // .then(res => dispatch(setApplications(res.Applications)))
    .catch(error => console.log(error))
  }
}

export const setApplications = applications => {
  console.log(applications)
  return {
    type: 'GET_APPLICATIONS_SUCCESS',
    applications,
  }
}