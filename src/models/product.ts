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

  private static changeAmounts(p1: Product, p2: Product): boolean {
    // if (p1.type === "L" || p1.type === "Kg") {
    //   if (p2.type === "g" || p2.type === "ml") {
    //     // change p1's amount
    //     p1.amount = p1.amount.valueOf()*1000;
    //   }
    // } else if (p1.type === "ml" || p1.type === "g") {
    //   if (p2.type === "g" || p2.type === "ml") {
    //     // change p2's amount
    //     p2.amount = p2.amount.valueOf()*1000;
    //   }
    // } else {
    //   return false;
    // }


    return true;
  }
  /**
   * TODOS
   * ! Verificação de tipos
   * ^ Verificação de valor não negativo
   * ^ Calcular
   */

  static calculate(p1: Product, p2:Product): Number {
    if (Product.changeAmounts(p1, p2)=== true) {
      return 1;
    } else {
      return 0;
    }
  }
}

export {Product};
