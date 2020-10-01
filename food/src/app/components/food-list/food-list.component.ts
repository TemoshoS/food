import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  food: any;
  currentF = null;
  currentIndex = -1;
  name = '';

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.retrieveFood();
  }

  retrieveFood(): void {
    this.foodService.getAllFood()
      .subscribe(
        obj => {
          this.food = obj;
          console.log(obj);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFood();
    this.currentF = null;
    this.currentIndex = -1;
  }

  setActiveFood(foo, index): void {
    this.currentF = foo;
    this.currentIndex = index;
  }


  searchName(): void {
    this.foodService.findByName(this.name)
      .subscribe(
        data => {
          this.food = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
