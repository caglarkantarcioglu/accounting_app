import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(url): any {
    return this.http.get(environment.baseUrl + url).toPromise();
  }

  post(url, body): any {
    return this.http.post(environment.baseUrl + url, body).toPromise();
  }

  patch(url, body): any {
    return this.http.patch(environment.baseUrl + url, body).toPromise();
  }

  delete(url): any {
    return this.http.delete(environment.baseUrl + url).toPromise();
  }
}
