// factoryMethod.js
// Implementação do Factory Method

// Interface do Factory Method
class Product {
  create() {
    throw new Error("O método 'create' deve ser implementado nas subclasses");
  }
}

// Concrete Product 1
class ConcreteProduct1 extends Product {
  create() {
    return "Produto 1 criado";
  }
}

// Concrete Product 2
class ConcreteProduct2 extends Product {
  create() {
    return "Produto 2 criado";
  }
}

// Interface do Creator (Factory Method)
class Creator {
  factoryMethod() {
    throw new Error("O método 'factoryMethod' deve ser implementado nas subclasses");
  }

  createProduct() {
    const product = this.factoryMethod();
    return `Criando um produto: ${product.create()}`;
  }
}
