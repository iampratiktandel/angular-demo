import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { zip } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  nameSource = ['Pratik', 'Kunal', 'Meet'];
  colorSource = ['Red', 'Green', 'Blue'];


  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(2)
    )

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(3)
    )

    /* zip */
    zip(nameObs, colorObs).subscribe(
      ([name, color]) => {
        this.createDiv(name, color, 'zipContainer')
      }
    )
    
    /* forkJoin */
    forkJoin(nameObs, colorObs).subscribe(
      ([name, color]) => {
        this.createDiv(name, color, 'forkContainer')
      }
    )
    
    /* combineLatest */
    combineLatest(nameObs, colorObs).subscribe(
      ([name, color]) => {
        this.createDiv(name, color, 'combineContainer1')
      }
    )

    /* withLatestFrom */
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(
      ([name, color]) => {
        this.createDiv(name, color, 'combineContainer2')
      }
    )

  }

  // creates a container
  createDiv(name: string, color: string, containerId: string) {
    let container = document.getElementById(containerId)
    let el = document.createElement('div');
    el.innerText = name;
    el.style.backgroundColor = color;
    container.appendChild(el);
  }
}
