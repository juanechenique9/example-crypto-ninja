import { Component, OnInit } from '@angular/core';
import { EncryptService } from 'lib-crypto-ninja';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'example-crypto-ninja';
  constructor( private encrypService: EncryptService) {

  }

  ngOnInit(): void {
    this.test();
  }


  test() {
    console.log(this.encrypService.encryptData(this.title))
  }



}
