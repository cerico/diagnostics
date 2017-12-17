const API_URL = `http://${window.location.host}/ports`
import {CardDesigner} from '../utils/card-designer'

export const getApplications = () => {
  const endpoint = `${API_URL}`

  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setApplications(res)))
    .catch(error => console.log(error))
  }
}

export const setApplications = res => {
  console.log(res)
  const filtered = []
  res.ports.filter(product => {
    console.log(product)
    console.log(21)
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
    payload: CardDesigner(apps)
  }
}

