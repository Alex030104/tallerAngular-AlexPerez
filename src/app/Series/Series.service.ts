import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from './Series';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

private apiURL: string = environment.baseUrl + "series.json"
constructor(private http: HttpClient) { }

getSeries(): Observable<Series[]>{
  return this.http.get<Series[]>(this.apiURL);
}

}
