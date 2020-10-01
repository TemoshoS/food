import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  currentF = null;
  message = '';

  constructor(private foodService: FoodService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFood(this.route.snapshot.paramMap.get('id'));
  }

  getFood(id): void {
    this.foodService.getById(id)
      .subscribe(
        data => {
          this.currentF = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFoood(status): void {
    const data = {
      name: this.currentF.name,
      description: this.currentF.description
      
    };

    this.foodService.updateById(this.currentF.id, data)
      .subscribe(
        response => {
          this.currentF.name = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateFood(): void {
    this.foodService.updateById(this.currentF.id, this.currentF)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Update i successfull!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFood(): void {
    this.foodService.deleteById(this.currentF.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/food']);
        },
        error => {
          console.log(error);
        });
  }

}
