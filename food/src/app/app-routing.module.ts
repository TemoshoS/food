import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { ContactformComponent } from 'src/app/components/contactform/contactform.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {  HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'food', component: FoodListComponent},
  { path: 'food/:id', component: FoodDetailsComponent },
  { path: 'add', component: AddFoodComponent },
  { path: 'contact', component: ContactformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
