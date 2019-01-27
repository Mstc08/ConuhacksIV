import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageAnalyzerService {
  private host: string = 'http://localhost:3000'

  constructor(private http: HttpClient, private router: Router) { }

public postImage(image: File): Observable<any>{
  return this.request(image);
}

  private request(image: File): Observable<any>{
    let base: Observable<Object>;
    let formData: FormData = new FormData();
    formData.append('files', image);

    base = this.http.post(`${this.host}/`, formData)

    const request = base.pipe(
      map((data) => data)
    );
    return request;
  }
}
