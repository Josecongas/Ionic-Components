import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista: IonList;

  datos: Observable<any>;

  constructor(
    private dataService: DataService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.datos = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(item) {
    this.presentToast('Favourite added!');
  }

  share(item) {
    this.presentToast('Shared!');
  }

  borrar(item) {
    this.presentToast('Item deleted!');
  }
}
