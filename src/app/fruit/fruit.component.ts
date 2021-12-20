import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  @Input() public fruit?: string;
  @Output() private deleteF = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteFruit() {
    this.deleteF.emit(this.fruit);
  }
}
