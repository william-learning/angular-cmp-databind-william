import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, 
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None and Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // @ViewChild('heading') header: ElementRef;
  // @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngAfterContentInit() {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

  onDestroy() {
  }
}