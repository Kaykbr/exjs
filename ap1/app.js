// singleton.js
// Implementação do Singleton

const Singleton = (function () {
  let instance;

  function createInstance() {
    // Lógica da instância única aqui
    return {
      message: 'Esta é uma instância única',
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
