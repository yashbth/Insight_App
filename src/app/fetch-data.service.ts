import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs'
import { GlobalService } from './global.service';
import {Info} from './Info'
import {catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  Device
  constructor( private http : HttpClient,private service : GlobalService) { }
  // url="https://swajal.in/monitor/assets/Php/"
  url="http://localhost:8000/assets/Php/"
  getData(id,table,filename):Observable<Info[]>{
    let data=new FormData();
    data.append('id',id);
    data.append('table',table);
    return this.http.post<Info[]>(this.url+filename,data).pipe(
      catchError(this.handleError('getData',[])))
      
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
