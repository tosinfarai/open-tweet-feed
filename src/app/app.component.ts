import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

import { OpentweetsService } from  './services/opentweetsapi/opentweets.service';
import { OpenTweets } from './shared/interfaces/opentweets';
import { OpenTweet } from './shared/interfaces/opentweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tweets: OpenTweets;
  tweetForm: FormGroup;
  user: string;
  constructor(private tweetService: OpentweetsService, private fb: FormBuilder ){}
  title = 'open-tweet';


  getAll(): void {
    this.tweetService.getAll().subscribe(response => {
      this.setTweets(response);
    })
  }
  setTweets(tweets): void {
    this.tweets = tweets;
  }
  getUser(): any {
    try {
      let username = localStorage.getItem('name')
      return username;
    } catch{
      err => console.log(err)
    }
  }
  setUser(username): void {
    try {
      localStorage.setItem('name', username);
    } catch {
      err => console.log(err)
    }
  }

  onSendClick(): void {
    let {tweetForm : { value: { tweet, name }}} =this;
    
    let { user } = this
    let tweetObj: OpenTweet = {
      name: name || "Anonymous",
      tweet: tweet
    }
    this.tweetService.create(tweetObj).subscribe( response => {
      this.getAll();
    })
  }
  ngOnInit(): void {
    this.getAll();
    this.user = this.getUser();

    this.tweetForm = this.fb.group({
      tweet: ['', [Validators.required]],
      name: ['']
    })
    this.tweetForm.patchValue({
      name: this.user || ""
    })
  }
}
