import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { SeriesService } from './Series.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SeriesService) { }
  series: Array<Series> = []
  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
  }


  ngOnInit() {
    this.getSeries
  }

}
