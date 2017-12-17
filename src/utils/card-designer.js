export const CardDesigner = (products) => {
  let j = products.map(product => {
    // prod.no = "p"
    product.name = product.app;
product.page =  '/rocogo';
product.description = "Home Visit App for mobile employees";
product.color =  "#f6ebd5";
product.cols =  2;
product.direction =  'column';
product.background =  "#212121";
product.url =  "http://malhamcove.io/";
product.logo =   `http://${window.location.host}/public/roco.png`;
// product.key =  product.port;
product.textOne =  "React Native";
product.textTwo =  "Redux";
product.textThree =  "Rails"
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