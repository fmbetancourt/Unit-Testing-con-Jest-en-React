const cities = ['Ciudad de Néxico', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error('No existe el string'));
    }
    if (typeof str !== 'string') {
      reject(new Error('El parametro no es un string'));
    }
    resolve(str.split('').reverse().join(''));
  });
}

module.exports = randomString;
