import { Injectable } from '@angular/core';

export interface IProduct {
  name: string,
  price: number,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[] = []

  constructor() {
    this.productList = this.generateFakeData(50);
  }

  private generateFakeData(nums: number): IProduct[] {

    // name = productName + size +  + color
    let productName = ['T-shirt', 'Skirt', 'Pants', 'Vest', 'Shoes', 'Glass', 'Jeans']
    let size = ['XS', 'S', 'M', 'L', 'XL']
    let color = ['Black', 'White', 'Red', 'Yellow']
    let len = productName.length * size.length * color.length;
    const realCount = nums > len ? len : nums;

    let nameList: string[] = []

    // ==name==
    for (let i = 0; i < productName.length; i++) {
      for (let j = 0; j < size.length; j++) {
        for (let k = 0; k < color.length; k++) {
          let name: string
          name = `${productName[i]} ${size[j]} ${color[k]}`
          nameList.push(name)
        }
      }
    }
    //console.log(nameList)

    // ==product==
    let newList = nameList.splice(0, realCount).map((item) => {
      return {
        name: item,
        price: (Math.floor(Math.random() * 10) + 1) * 1000,
        description: `this is ${item}`
      }
    })
    return newList

  }
}
