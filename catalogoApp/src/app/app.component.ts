import { Component } from '@angular/core';
import { HouseService } from './products/house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HouseService]
})
export class AppComponent {
  title:String = '';
  
}
