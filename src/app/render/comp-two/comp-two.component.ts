import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  @ViewChild('listContainer') liContainer: ElementRef<HTMLUListElement>;
  @ViewChild('addUserBtn') addUserBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('removeUserBtn') removeUserBtn: ElementRef<HTMLButtonElement>;

  // private removeUserBtn: any;

  private liItem: string;
  user: string = '';

  constructor(private  renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.listen(this.addUserBtn.nativeElement, 'click', (event) => {
      this.addListItem();
    })

    this.renderer.listen(this.removeUserBtn.nativeElement, 'click', (event) => {
      this.removeListItem();
    })

  }

  private addListItem() {
    this.liItem = this.renderer.createElement('li');
    const itemText = this.renderer.createText(this.user);
    // const removeUserBtn = this.renderer.createElement('button');
    // const btnText = this.renderer.createText('Remove User');

    // this.renderer.appendChild(removeUserBtn, btnText);
    // this.renderer.appendChild(this.liItem, removeUserBtn);

    this.renderer.appendChild(this.liItem, itemText);
    this.renderer.appendChild(this.liContainer.nativeElement, this.liItem);
  }

  private removeListItem() {
    this.renderer.removeChild(this.liContainer.nativeElement, this.liItem)
  }

}
