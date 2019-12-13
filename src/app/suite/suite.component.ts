import { PostsService } from './../services/posts.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { TextValidator } from "../myValidators.validation";
import { HttpClient } from "@angular/common/http";
import { take } from 'rxjs/operators';

@Component({
  selector: "app-suite",
  templateUrl: "./suite.component.html",
  styleUrls: ["./suite.component.sass"]
})
export class SuiteComponent implements OnInit {
  DefView = `courses`;

  setView(selectedView) {
    this.DefView = selectedView;
  }

  isFav = false;

  WhColor = false;
  switchColor() {
    this.WhColor = !this.WhColor;
  }

  mail = "";
  logObj(email) {
    this.mail = email;
    // console.log(this.mail);
  }

  // Tempate Driven Form Validation
  onSubmit(form) {
    console.log(form);
  }

  // Reactive Form Validation
  form2 = new FormGroup({
    email2: new FormControl(
      "",
      Validators.required,
      TextValidator.asyncUniquness
    ),
    password2: new FormControl("", TextValidator.noSpacesAllowed),
    age2: new FormControl("", [
      CustomValidators.range([18, 25]),
      CustomValidators.max(20)
    ])
  });

  get email2() {
    return this.form2.get("email2");
  }
  get password2() {
    return this.form2.get("password2");
  }
  get age2() {
    return this.form2.get("age2");
  }

  // Get Read Objects With HTTP
  constructor(private service: PostsService) {}

  // myApi: string = "https://jsonplaceholder.typicode.com/posts";
  posts: any;

  ngOnInit(): void {
    this.service.get().subscribe(response => {
      this.posts = response
    });
  }

  // HTTP Create method to add new object
  createPost(input : HTMLInputElement){
    let newPost = {
      userId : 0,
      id: 0,
      title: input.value,
      body : 'Body of: ' + input.value
    }
    this.service.create(newPost).subscribe(response=>{
      this.posts.splice(0,0,newPost);       // update current view
    });
  }
  
  // // HTTP Update method to Update an Object
  updatePost(post,title){
    let updateObj = {
      userId : post.userId,
      id: post.id,
      title: title,
      body : 'Body of: ' + title
    }
    this.service.update(post.id, updateObj).subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts[index] = updateObj;        // update current view
    });
  }

  // // HTTP Delete method to Delete an Object
  deletePost(post){
    this.service.delete(post.id).subscribe(Response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);       // update current view
    });
  }

}
