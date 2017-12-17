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

export const setApplications = res => {
  console.log(res)
  const filtered = []
  res.ports.filter(product => {
    console.log(product)
    return res.apps.map(p => {
      if (p.pid === product.pid){
        filtered.push({app:p.name,port:product.port})
      }
      
    })
  })
  console.log(filtered)
  return {
    type: 'GET_APPLICATIONS_SUCCESS',
    payload: filtered
  }
}

