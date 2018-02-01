import {
    Component,
    Input,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef,
    OnInit,
    OnDestroy,
  } from '@angular/core';
  
  import { Row } from '../../lib/data-set/row';
  import { ViewRow } from './view-row';
  
  @Component({
    selector: 'custom-row-component',
    template: `
      <ng-template #dynamicTarget></ng-template>
    `,
  })
  export class CustomRowComponent implements OnInit, OnDestroy {
  
    customComponent: any;
    @Input() row: Row;
    @ViewChild('dynamicTarget', { read: ViewContainerRef }) dynamicTarget: any;
  
    constructor(private resolver: ComponentFactoryResolver) {
    }
  
    ngOnInit() {
      if (this.row && !this.customComponent) {
        this.createCustomComponent();
        this.patchInstance();
      }
    }
  
    ngOnDestroy() {
      if (this.customComponent) {
        this.customComponent.destroy();
      }
    }
  
    protected createCustomComponent() {
      const componentFactory = this.resolver.resolveComponentFactory(this.row.renderComponent);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
  
    protected patchInstance() {
      Object.assign(this.customComponent.instance, this.getPatch());
    }
  
    protected getPatch(): ViewRow {
      return {
        row: this.row
      }
    }
  }
  