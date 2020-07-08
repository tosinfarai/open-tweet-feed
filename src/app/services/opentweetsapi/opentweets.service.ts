import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { OpenTweet } from '../../shared/interfaces/opentweet';
import { OpenTweets } from '../../shared/interfaces/opentweets';


@Injectable({
  providedIn: 'root'
})
export class OpentweetsService {
  BASE_URL:string = "http://localhost:4200/api"

  constructor(public http: HttpClient) {}

  /**
   *
   * Get all Feeds
   */
  public getAll(): Observable<OpenTweets> {
    let path = `${this.BASE_URL}/feed`;

    path += '?';

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.http.request<OpenTweets>('GET', path, {
      observe: 'body',
      headers: headers,
    });
  }
  /**
   *
   * Create new tweet
   */
  public create(tweet: OpenTweet): Observable<OpenTweet> {
    let path = `${this.BASE_URL}/feed`;
    // verify required parameter 'tweet' is set
    if (tweet === undefined) {
      throw new Error(
        'Missing required parameter tweet when calling create'
      );
    }
    path += '?';

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<OpenTweet>(path, tweet, {
      observe: 'body',
      headers: headers,
    });
  }
  /**
   *
   * Get an tweet by ID
   * @param id The ID of the tweet
   */
  public get(id: string): Observable<OpenTweet> {
    let path = `${this.BASE_URL}/feed/{id}`.replace(
      '{' + 'id' + '}',
      String(id)
    );

    // verify required parameter 'id' is set
    if (id === undefined) {
      throw new Error('Missing required parameter id when calling get');
    }
    path += '?';

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.http.request<OpenTweet>('GET', path, {
      observe: 'body',
      headers: headers,
    });
  }
}
