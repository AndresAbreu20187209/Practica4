// app.test.js
const sayHello = require('./hola-mundo');

test('debe de retornar Hola Mundo', () => {
  expect(sayHello()).toBe("Hola Mundo");
});
