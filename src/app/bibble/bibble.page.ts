import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-bibble',
  templateUrl: './bibble.page.html',
  styleUrls: ['./bibble.page.scss'],
})
export class BibblePage implements OnInit {

  constructor(private NavCtrl:NavController) {}

  ngOnInit() {
  }
  goBack(){
    this.NavCtrl.navigateBack('home');
  }

}
