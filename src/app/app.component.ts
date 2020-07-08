import { Component, OnInit } from '@angular/core';
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
  user: string = "Anonymous";
  constructor(private tweetService: OpentweetsService ){}
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

  onSendClick(event): void {
    let {value} = event.target;
    let { user } = this
    let tweetObj: OpenTweet = {
      name: user,
      tweet: value
    }
    this.tweetService.create(tweetObj).subscribe( response => {
      this.setTweets(response);
    })
  }
  ngOnInit(): void {
    this.getAll();
    this.user = this.getUser();
  }
}
