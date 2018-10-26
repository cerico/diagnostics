const API_URL = `https://${window.location.host}/ports`
import {CardDesigner, BadDesigner} from '../utils/card-designer'

export const getApplications = () => {
  const endpoint = `${API_URL}`
console.log('fetcfffhing')
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setApplications(res)))
    .catch(error => dispatch(setError(error)))
  }
}

export const setError = error => {
  console.log(error)
  const filtered = [{
    app:'lad.da.da',
    port:'',
    uptime: '2',
    mem:' p.mem',
    cpu:' p.cpu',
    shortname:' p.name.split'
  }]
  return {
    type: 'GET_APPLICATIONS_ERROR',
    payload: BadDesigner(filtered)
  }
}

const showPort = port => port.port ? port.port : ''

export const setApplications = res => {
  const filtered = res.apps.filter(app => app.name)
  return {
    type: 'GET_APPLICATIONS_SUCCESS',
    payload: CardDesigner(filtered)
  }
}

