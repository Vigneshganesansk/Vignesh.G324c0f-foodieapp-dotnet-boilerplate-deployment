import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { Restaurants } from '../_models/Restaurants';
import { StorageService } from '../_services/storage.service';
import { Comments } from '../_models/Comments';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(
    private appService: AppService,
    private storageService: StorageService,
    private alertifyService: AlertifyService
    ) { }
  selectedRestaurant: Restaurants;
  comments : Comments[];
  userNmae =this.storageService.userName;
  ngOnInit() {
    this.appService.restaurantObserver.subscribe(restaurant => {
      this.selectedRestaurant = restaurant;
      this.storageService.fetchCommentsFor(this.selectedRestaurant.restaurant.id,this.storageService.userName ).subscribe(comments => {
        this.comments = comments;
        console.log("Comments",this.comments);
      });
    });
  }
  addComment(){
    this.comments.push({description:"",username:this.storageService.userName});
  }
  removeComment(index: number)
  {
    this.comments.splice(index,1);
  }
  saveChanges(){
    if(this.comments.length==0)
    {
      this.comments.push({description:"",username:this.storageService.userName});
    }
    this.storageService.postComments(this.selectedRestaurant.restaurant.id,this.storageService.userName,this.comments).subscribe(response => {
      if(response)
      {
        this.alertifyService.success("Saved successfully");
        console.log("Comment added ")
      }
    })
  }
}