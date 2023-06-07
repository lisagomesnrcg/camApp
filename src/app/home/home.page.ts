import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { Foto } from '../models/Foto.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoService: FotoService, public actionsheetController: ActionSheetController) { }
  
  async ngOnInit () {
    await this.fotoService.carregarFotosSalvas();
  }

  public async showActionSheet (foto: Foto, position: number) {
    const actionsheet = await this.actionsheetController.create ({
      header: 'Fotos',
      buttons: [{
        text: 'Delete',
        role: 'Destructive',
        icon: 'Trash',
        handler: () => {
          this.fotoService.deletePicture(foto, position);
        }
      }, {
        text: 'Calcelar',
        icon: 'Close',
        role: 'Cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionsheet.present();
  }

  tirarFoto() {
    this.fotoService.tirarFoto();
  }
}