import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popoverpage',
  templateUrl: './popoverpage.page.html',
  styleUrls: ['./popoverpage.page.scss'],
})
export class PopoverpagePage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();

    console.log(`Padre: ${JSON.stringify(data)}`);
  }
}
