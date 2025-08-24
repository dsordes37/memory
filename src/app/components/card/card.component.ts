import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) image!:string;
  @Input({required: true}) ocult:boolean=true;

  vira():void {
    this.ocult = this.ocult ? false : true;
  }
}

