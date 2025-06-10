import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewslettersResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'https://webhook.site/d928b3f6-8e9e-488d-817a-724c06326f9f';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewslettersResponse> {
    const data = { name, email };

    return this.http.post<NewslettersResponse>(this.endpointUrl, data);
  }
}
