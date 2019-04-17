import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  textoBuscar = '';
  albumes: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenuAlbumes().subscribe(data => {
      this.albumes = data;
    });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
    console.log(this.textoBuscar);
  }

}
