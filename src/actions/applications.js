const API_URL = `http://${window.location.host}/ports`
import {CardDesigner} from '../utils/card-designer'
// const API_URL = `https://s3.eu-west-2.amazonaws.com/io1937/json/sample.json`
// let apps = [{app:'oslo',port:28},{app:'malmo',port:61}]
let apps = [{app:'oslo',port:28,url:"y"},{url:"z",app:'malmo',port:61}]

export const getApplications = () => {
  const endpoint = `${API_URL}`
  console.log(endpoint)
  return {
    type: 'GET_APPLICATIONS_SUCCESS',
    payload: CardDesigner(apps)
  }
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
        filtered.push({
          app:p.name,
          port:product.port,
          uptime: p.uptime,
          mem: p.mem,
          cpu: p.cpu
        })
      }
      
    })
  })
  console.log(filtered)
  return {
    type: 'GET_APPLICATIONS_SUCCESS',
    payload: filtered
  }
}

