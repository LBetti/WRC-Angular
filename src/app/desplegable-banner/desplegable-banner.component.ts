import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desplegable-banner',
  templateUrl: './desplegable-banner.component.html',
  styleUrls: ['./desplegable-banner.component.css'],
})
export class DesplegableBannerComponent {
  @Input() title: string = 'Dropdown';
  @Input() items: { label: string; url: string }[] = [];
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  navigateTo(url: string) {
    window.location.href = url;
  }
}
