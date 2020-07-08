import { Component, OnInit } from '@angular/core';
import { OpentweetsService } from  './services/opentweetsapi/opentweets.service';
import { OpenTweet } from './shared/interfaces/opentweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tweets: OpenTweet[];
  constructor(private tweetService: OpentweetsService ){}
  title = 'open-tweet';
  ngOnInit(): void {
    this.tweetService.getAll().subscribe(response => {
      console.log(response)
    })
  }
}
