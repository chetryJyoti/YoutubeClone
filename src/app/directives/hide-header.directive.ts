import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective {

  @Input('appHideHeader') header: any;
  constructor() { }

}
