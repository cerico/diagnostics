const photoURL = window.location.host

const projects = [{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"#f6ebd5",
  cols:2,
  direction:'column',
  background:"#212121",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:1,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
},{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"purple",
  cols:2,
  direction:'column',
  background:"pink",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:2,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
},{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"#222",
  cols:2,
  direction:'column',
  background:"yellow",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:3,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
},{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"#f6ebd5",
  cols:2,
  direction:'column',
  background:"#212121",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:4,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
},{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"#f6ebd5",
  cols:1,
  direction:'column',
  background:"#212121",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:5,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
},{
  name: "Roco Go",
  page: '/rocogo',
  description:"Home Visit App for mobile employees",
  color:"#f6ebd5",
  cols:3,
  direction:'column',
  background:"#212121",
  url:"http://malhamcove.io/",
  logo: `http://${window.location.host}/public/roco.png`,
  key:6,
  textOne:"React Native",
  textTwo:"Redux",
  textThree:"Rails"
}]

export default (state = projects, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return state
    default:
      return state;
  }
}