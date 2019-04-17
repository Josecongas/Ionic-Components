import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  publisher = '';

  superheroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'all';
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    this.publisher = event.detail.value;
  }

}
