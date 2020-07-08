import { Component, OnInit } from '@angular/core';
import { OpentweetsService } from  './services/opentweetsapi/opentweets.service';
import { OpenTweets } from './shared/interfaces/opentweets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tweets: OpenTweets;
  constructor(private tweetService: OpentweetsService ){}
  title = 'open-tweet';
  ngOnInit(): void {
    this.tweetService.getAll().subscribe(response => {
      this.tweets = response
    })
  }
}
