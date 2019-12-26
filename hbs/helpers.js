const hbs = require('hbs')

hbs.registerHelper('getAnio', () => new Date().getFullYear())
hbs.registerHelper('capitalizar', (texto) => texto.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase()).join(' '))