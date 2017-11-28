import { Component, OnInit } from '@angular/core';

import {UsersService} from '../services/users.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users:any;
  private photos:any;
  private album_ids=[]
  private album=[]
  private user_photo=[]
  constructor(private usersService:UsersService) { }

  loadUsers(){
   return this.usersService.getUsers().subscribe((response:Response)=>{
      this.users=response.json();
    })
    
  }
  slice(element,index,array){
    return (index%10==0)
  }
  loadPhotos(){
    return this.usersService.getPhotos().subscribe((response:Response)=>{
      this.photos=response.json();
      for(var photo in this.photos){
        if(this.album_ids.indexOf(this.photos[photo].albumId)==-1){
          this.album_ids.push(this.photos[photo].albumId);
          this.album.push(this.photos[photo].url)
        } 
      }
      this.user_photo=this.album.filter(this.slice)
    })

  }

  saveData(photo){
    //console.log(user);
    localStorage.setItem('user_photo',photo)
  }
  ngOnInit() {
  this.loadUsers();
  this.loadPhotos();
  }

}
