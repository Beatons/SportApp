import { Component } from '@angular/core';


@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor() {
  }

count:number = 0;

AddIt(){
    this.count++;
    console.log(this.count);
    
}

MinusIt(){
    this.count--;
    console.log(this.count);
}

}
