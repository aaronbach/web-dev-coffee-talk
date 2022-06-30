import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  async printCurrentPosition () {
    console.log(await Geolocation.checkPermissions());
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
  };

}
