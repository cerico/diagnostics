const showPort = product => product.port ? `Port: ${product.port}` : 'Under Maintenance!'

const colour = product => {
  const online = ['#3a8738','#223b68', '#387987','#261430',"cornflowerblue"]
  const errored = '#d2d1d1'
  return product.port ? online[parseInt(Math.random()*5)] : errored
}

const opacity = product => product.port ? 0.88 : 0.60

export const CardDesigner = (products) => {
  const colours = ['#3a8738','#223b68', '#387987','#261430',"cornflowerblue"]
  console.log(products)
  let app = products.map(product => {
    product.name = product.name.split('.')[0];
    product.description = `https://${product.app}`;
    product.color =  "rgb(249, 247, 238)";
    product.cols =  3;
    product.direction =  'column';
    product.background =  colour(product.port);
    product.url =  `https://${product.app}`;
    product.textOne = `${showPort(product.port)}`;
    product.textTwo =  `Uptime: ${product.uptime}`;
    product.textThree =  `CPU: ${product.cpu}`;
    product.textFour =  `Memory: ${product.mem}`;
    product.mini = true;
    product.opacity = opacity(product.port);
    return product  
  })
  return app
};

export const BadDesigner = (products) => {
  let app = products.map(product => {
    product.name = product.shortname;
    product.page =  '/rocogo';
    product.description = `https://${product.app}`;
    product.color =  "#656364";
    product.cols =  3;
    product.direction =  'column';
    product.background = colour(product.port);
    product.url =  `https://${product.app}`;
    product.textOne = `Port: ${showPort(product.port)}`;
    product.textTwo =  `Uptime: ${product.uptime}`;
    product.textThree =  `CPU: ${product.cpu}`;
    product.textFour =  `Memory: ${product.mem}`;
    product.mini = true
    return product  
  })
  return app
}