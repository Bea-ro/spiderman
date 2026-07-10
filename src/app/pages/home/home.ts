import { Component, HostListener } from '@angular/core';
import { Cinema } from '../../shared/cinema/cinema';

@Component({
  selector: 'app-home',
  imports: [Cinema],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isHiden = false;
  @HostListener('window:wheel')
  onWheel() {
    this.isHiden = true;
  }

  @HostListener('window:click')
  onClick() {
    this.isHiden = true;
  }
}
