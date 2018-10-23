const subDomain = window.location.host
const firstDotIndex = subDomain.indexOf('.');
const url = subDomain.substring(firstDotIndex + 1);

export const CardDesigner = (products) => {
  const colours = ['#3a8738','#223b68', '#387987','#261430',"cornflowerblue"]
  let app = products.map(product => {
    product.name = product.app;
    product.page =  '/rocogo';
    product.description = `https://${product.app}.${url}`;
    product.color =  "rgb(249, 247, 238)";
    product.cols =  3;
    product.direction =  'column';
    product.background =  colours[parseInt(Math.random()*5)];
    product.url =  `https://${product.app}.${url}`;
    product.textOne = `Port: ${product.port}`;
    product.textTwo =  `Uptime: ${product.uptime}`;
    product.textThree =  `CPU: ${product.cpu}`;
    product.textFour =  `Memory: ${product.mem}`;
    product.mini = true
    return product  
  })
  return app
};