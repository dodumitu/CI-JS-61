export class Product {
  id;
  name;
  price;
  maker;
  saleOff;
  importDate;

  constructor(id, name, price, maker, saleOff, importDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.maker = maker;
    this.saleOff = saleOff;
    this.importDate = importDate;
  }
}

export class Houseware extends Product {
 reliability;
  constructor(id, name, price, maker, saleOff, importDate, reliability) {
    super(id, name, price, maker, saleOff, importDate);
    this.reliability = reliability;
  }
}

export class Clothes extends Product {
  origin;
  material;
  constructor(id, name, price, maker, saleOff, importDate, origin, material) {
    super(id, name, price, maker, saleOff, importDate);
    this.origin = origin;
    this.material = material;
  }
}

export class Foods extends Product {
  taste;
  constructor(id, name, price, maker, saleOff, importDate, taste) {
    super(id, name, price, maker, saleOff, importDate);
    this.taste = taste;
  }
}
