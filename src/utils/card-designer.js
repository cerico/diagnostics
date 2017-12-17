export const CardDesigner = (products) => {
  let j = products.map(product => {
    // prod.no = "p"
    product.name = product.app;
product.page =  '/rocogo';
product.description = `http://${product.app}.malham.io`;
product.color =  "#fff";
product.cols =  2;
product.direction =  'column';
product.background =  "cornflowerblue";
product.url =  `http://${product.app}.malham.io`;
product.logo =   `http://${window.location.host}/public/roco.png`;
// product.key =  product.port;
product.textOne = `Port: ${product.port}`;
product.textTwo =  `Uptime: ${product.uptime}`;
product.textThree =  `CPU: ${product.cpu}`
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