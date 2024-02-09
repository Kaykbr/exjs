// app.js
// Singleton Design Pattern Example

// Implementação do Singleton
const Singleton = (function () {
  let instance;

  function createInstance() {
    // Lógica da instância única aqui
    return {
      showMessage: function () {
        console.log('Mensagem da instância única');
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Exemplo de uso
const instance1 = Singleton.getInstance();
instance1.showMessage(); // Saída: Mensagem da instância única

const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Saída: true (mesma instância)

// Tentativa de criar uma nova instância, mas ainda retorna a instância original
const instance3 = new Singleton();
console.log(instance3); // Saída: undefined, pois não é possível criar uma nova instância diretamente
