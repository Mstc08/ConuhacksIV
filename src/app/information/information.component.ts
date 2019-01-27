import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { UrlSerializer } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  options: any;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.getListOfGroup("https://data.edmonton.ca/resource/kx42-g5ky.json").subscribe(data => {
      this.options = data;
      console.log(this.options);
     });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
  public getListOfGroup(url: string): Observable<any> {
    return this.http.get(url, this.httpOptions).pipe(
      map((data)=>{
        this.options = data;
      },
      catchError(this.handleError)
    ));
    // return this.http.get(url)
                 
  }
}
