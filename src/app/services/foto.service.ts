import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from '../models/Foto.interface';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

//Lista das fotos que estão armazenadas do despositivo
  fotos: Foto[] = [];
//Criar uma variavel para armazenar olocal fisico (pasta) das fotos
  private FOTO_ARMAZENAMENTO: string = 'fotos';
  
  constructor() { }

  
}
