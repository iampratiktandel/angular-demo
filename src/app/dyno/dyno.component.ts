import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dyno',
  templateUrl: './dyno.component.html',
  styleUrls: ['./dyno.component.css']
})
export class DynoComponent implements OnInit {

  @Input() data: string;
  @Output() public destroy: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  destroyComponent() {
    this.destroy.emit();
  }

}
