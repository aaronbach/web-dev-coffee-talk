import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NamesService } from '../services/names.service';

type Person = {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab1Page {

  counter: number = 0;
  persons: Person[] = [];

  constructor (private namesService: NamesService) {}

  onIncreaseCounter () {
    this.counter += 1;
  }

  onAddPerson () {
    const randomName = this.namesService.generateRandomName();
    this.persons = [...this.persons, {
      icon: 'person-circle-outline',
      name: randomName
    }];
  }

}
