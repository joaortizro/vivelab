import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import { forEach } from '@angular/router/src/utils/collection';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private photo:any;
  private user:any;
  private posts:any;
  private selecteds:boolean[] ;
  private comments:any;
  private commentsByPost={}

  constructor(private route: ActivatedRoute,
              private userService : UserService
  ) {
    
  }

  setUp(){
    this.photo=localStorage.getItem('user_photo');
    this.route.params.subscribe(params => {
      //console.log(params.id)
      this.loadUser(params.id)
      this.loadPosts(params.id)

    });
  }
  loadUser(userId:number){
    return this.userService.getUserbyId(userId).subscribe((response:Response)=>{
      this.user=response.json()[0];
      //console.log(this.user)
    })
  }
  
  loadPosts(userId:number){
    return this.userService.getPostbyId(userId).subscribe((response:Response)=>{
      this.posts=response.json();
      //console.log(this.posts)
      this.selecteds=new Array(this.posts.length)
      for(let i =0;i<this.selecteds.length;i++){
          this.selecteds[i]=false;
      }
      
    })
  }

  loadComments(postId:number){
    return this.userService.getCommentsbyPostId(postId).subscribe((response:Response)=>{
      this.comments=response.json();
      this.commentsByPost[postId]=this.comments;
      //console.log(this.comments)
      console.log(this.commentsByPost)

    })
  }

  ngOnInit() {
    this.setUp();
  }

}
