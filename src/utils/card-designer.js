// export const randomColour = (product) => {
//   const colours = ['#3a8738','#223b68', '#387987','#261430',"cornflowerblue"]
//   return colour = colours[parseInt(Math.random()*5)]
// }

export const CardDesigner = (products) => {
  const colours = ['#3a8738','#223b68', '#387987','#261430',"cornflowerblue"]
  let j = products.map(product => {
    // prod.no = "p"
    product.name = product.app;
product.page =  '/rocogo';
product.description = `http://${product.app}.malham.io`;
product.color =  "#fff";
product.cols =  2;
product.direction =  'column';
product.background =  colours[parseInt(Math.random()*5)];
product.url =  `http://${product.app}.malham.io`;
product.logo =   `http://${window.location.host}/public/roco.png`;
// product.key =  product.port;
product.textOne = `Port: ${product.port}`;
product.textTwo =  `Uptime: ${product.uptime}`;
product.textThree =  `CPU: ${product.cpu}`;
product.textFour =  `Memory: ${product.mem}`;
product.textFive =  `Pid: ${product.pid}`;
product.height = '176px';
product.z = colours[parseInt(Math.random()*5)]
    return product  
  })
  console.log(j)
  return j
}


// product.name = product.app;
// product.page =  '/rocogo';
// product.description = "Home Visit App for mobile employees";
// product.color =  "#f6ebd5";
// product.cols =  2;
// product.direction =  'column';
// product.background =  "#212121";
// product.url =  "http://malhamcove.io/";
// product.logo =   `http://${window.location.host}/public/roco.png`;
// product.key =  product.port;
// product.textOne =  "React Native";
// product.textTwo =  "Redux";
// product.textThree =  "Rails"