import {Component} from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

  public products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high performance laptop',
      price: 1200,
      category: 'Electronics',
      stock: 30
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone with advanced features',
      price: 800,
      category: 'Electronics',
      stock: 50
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones',
      price: 150,
      category: 'Electronics',
      stock: 100
    },
    {
      id: 4,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with grinder',
      price: 250,
      category: 'Home Appliances',
      stock: 40
    },
    {
      id: 5,
      name: 'Desk Chair',
      description: 'Ergonomic office chair',
      price: 300,
      category: 'Furniture',
      stock: 20
    }
  ];

}
