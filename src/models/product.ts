interface IDataRequest{
    amount: Number;
    value: Number;
    type: string;
}

class Product {
  amount: Number; // Quantidade peso/volume
  value: Number; // Valor em unidades monetárias
  type: string; // Peso/Volume

  constructor({amount, value, type}: IDataRequest) {
    this.amount = amount;
    this.value = value;
    this.type = type;
  }

  // Change the amounts to smaller type
  private static changeAmounts(p1: Product, p2: Product): boolean {
    switch (p1.type) {
      case "Kg":

        if (p2.type === p1.type) {
          return true;
        } else if (p2.type == "g") {
          p1.amount = p1.amount.valueOf()*1000;
          return true;
        } else {
          return false;
        }

      case "g":

        if (p2.type == p1.type) {
          return true;
        } else if (p2.type == "Kg") {
          p2.amount = p2.amount.valueOf()*1000;
          return true;
        } else {
          return false;
        }

      case "L":
        if (p2.type == p1.type) {
          return true;
        } else if (p2.type == "ml") {
          p1.amount = p1.amount.valueOf()*1000;
          return true;
        } else {
          return false;
        }

      case "ml":

        if (p2.type == p1.type) {
          return true;
        } else if (p2.type == "L") {
          p2.amount = p2.amount.valueOf()*1000;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  /**
   * TODOS
   * * Verificação de tipos
   * ^ Verificação de valor não negativo
   * ^ Calcular
   */


  private static verifyNonNegativeValue(p1: Product, p2: Product): Boolean {
    if (p1.amount <= 0 || p1.value <= 0) {
      return false;
    }
    if (p2.amount <= 0) {
      return false;
    }
    return true;
  }


  static calculate(p1: Product, p2:Product): Boolean {
    if (this.verifyNonNegativeValue(p1, p2)) {
      if (Product.changeAmounts(p1, p2) === true) {
        const costPerUnity = p1.value.valueOf()/p1.amount.valueOf();
        p2.value = costPerUnity*p2.amount.valueOf();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export {Product};
