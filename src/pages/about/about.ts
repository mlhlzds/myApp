import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items= [{title:'123123'},{title:'22222'}];
  constructor(public navCtrl: NavController) {

  }

}
