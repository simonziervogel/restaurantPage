import { Component } from '@angular/core';

interface dish{
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  dishes: dish[]= [
    {
      name: "Pizza Margherita",
      description: "Traditionelle Pizza mit frischem Basilikum und Mozzarella",
      price: 9.50
    },
    {
      name: "Spaghetti Carbonara",
      description: "Traditionelle italienische Pasta mit Ei, Pancetta und Parmesan",
      price: 12.00
    },
    {
      name: "Caesar Salad",
      description: "Frischer Salat mit gegrilltem Hähnchen, Parmesankäse und Caesar-Dressing",
      price: 10.50
    },
    {
      name: "Lachs Teriyaki",
      description: "Gebratener Lachs in süßer und salziger Teriyaki-Sauce",
      price: 15.00
    },
    {
      name: "Crème brûlée",
      description: "Französisches Dessert mit knuspriger Karamellkruste und cremiger Vanillecustard-Füllung",
      price: 6.50
    },
    {
      name: "Crème brûlée",
      description: "Französisches Dessert mit knuspriger Karamellkruste und cremiger Vanillecustard-Füllung",
      price: 6.50
    }

  ];


  showAlert(dishName: string) {
    console.log("test");
    alert('Dein Gericht ' + dishName +  ' wurde dem Warenkorb hinzugefügt!')
  }
}
