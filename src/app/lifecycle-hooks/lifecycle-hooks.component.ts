// src/app/lifecycle-hooks/lifecycle-hooks.component.ts
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: string = 'Initial Data';
  changesLog: string[] = [];

  constructor() {
    console.log('Constructor: Component is created.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input property changes detected.', changes);
    this.changesLog.push('ngOnChanges triggered');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized.');
    this.changesLog.push('ngOnInit triggered');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Custom change detection triggered.');
    this.changesLog.push('ngDoCheck triggered');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content projection initialized.');
    this.changesLog.push('ngAfterContentInit triggered');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content projection checked.');
    this.changesLog.push('ngAfterContentChecked triggered');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialization completed.');
    this.changesLog.push('ngAfterViewInit triggered');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked.');
    this.changesLog.push('ngAfterViewChecked triggered');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is about to be destroyed.');
    this.changesLog.push('ngOnDestroy triggered');
  }

}

