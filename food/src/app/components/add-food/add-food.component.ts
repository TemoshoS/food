import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  food = {
    id: 0,
    name: '',
    description: '',
    ingredients:''

  };
  submitted = false;
  url:any;
  constructor(private foodservice: FoodService) { }

  ngOnInit(): void {
  }

  saveFood(): void {
    const obj = {
      id: this.food.id,
      name: this.food.name,
      description: this.food.description,
      ingredients: this.food.ingredients
    };

    this.foodservice.createFood(obj)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  readUrl(event){
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  newFood(): void {
    this.submitted = false;
    this.food = {
      id: 0,
      name: '',
      description: '',
      ingredients: ''
      
    };
  }

}
