/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './inaugration.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './inaugration.css.shim';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
var renderType_InaugrationComponent_Host:import0.RenderComponentType = (null as any);
class _View_InaugrationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _InaugrationComponent_0_4:import3.InaugrationComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InaugrationComponent_Host0,renderType_InaugrationComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-inaugration',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InaugrationComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InaugrationComponent_0_4 = new import3.InaugrationComponent();
    this._appEl_0.initComponent(this._InaugrationComponent_0_4,[],compView_0);
    compView_0.create(this._InaugrationComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.InaugrationComponent) && (0 === requestNodeIndex))) { return this._InaugrationComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_InaugrationComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_InaugrationComponent_Host === (null as any))) { (renderType_InaugrationComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_InaugrationComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const InaugrationComponentNgFactory:import9.ComponentFactory<import3.InaugrationComponent> = new import9.ComponentFactory<import3.InaugrationComponent>('app-inaugration',viewFactory_InaugrationComponent_Host0,import3.InaugrationComponent);
const styles_InaugrationComponent:any[] = [import10.styles];
var renderType_InaugrationComponent:import0.RenderComponentType = (null as any);
class _View_InaugrationComponent0 extends import1.AppView<import3.InaugrationComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import11.NgIf;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import11.NgIf;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InaugrationComponent0,renderType_InaugrationComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import12.TemplateRef_(this._appEl_0,viewFactory_InaugrationComponent1);
    this._NgIf_0_6 = new import11.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n               ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import12.TemplateRef_(this._appEl_4,viewFactory_InaugrationComponent2);
    this._NgIf_4_6 = new import11.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([],[
      this._anchor_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import11.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import11.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:boolean = !this.context.startLaunch;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.startLaunch;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_InaugrationComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.InaugrationComponent> {
  if ((renderType_InaugrationComponent === (null as any))) { (renderType_InaugrationComponent = viewUtils.createRenderComponentType('C:/Users/Shiv Tavker/Documents/Mechanica Final/assets/app/Inaugration/inaugration.html',0,import8.ViewEncapsulation.Emulated,styles_InaugrationComponent,{})); }
  return new _View_InaugrationComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_InaugrationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InaugrationComponent1,renderType_InaugrationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'style','width:100%; height:100%;');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n               ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'video',(null as any));
    this.renderer.setElementAttribute(this._el_4,'autoplay','');
    this.renderer.setElementAttribute(this._el_4,'class','video');
    this.renderer.setElementAttribute(this._el_4,'loop','');
    this.renderer.setElementAttribute(this._el_4,'muted','');
    this._text_5 = this.renderer.createText(this._el_4,'\n                   ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'source',(null as any));
    this.renderer.setElementAttribute(this._el_6,'src','./fireworks.mp4');
    this.renderer.setElementAttribute(this._el_6,'type','video/mp4');
    this._text_7 = this.renderer.createText(this._el_4,'\n               ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_10,'id','buttoncontainer');
    this._text_11 = this.renderer.createText(this._el_10,'\n               ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'button',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','myButton');
    this._text_13 = this.renderer.createText(this._el_12,'Launch',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  private _handle_click_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.launch()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_InaugrationComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_InaugrationComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_InaugrationComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InaugrationComponent2,renderType_InaugrationComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'video',(null as any));
    this.renderer.setElementAttribute(this._el_0,'autoplay','');
    this.renderer.setElementAttribute(this._el_0,'class','video');
    this.renderer.setElementAttribute(this._el_0,'loop','');
    this.renderer.setElementAttribute(this._el_0,'muted','');
    this._text_1 = this.renderer.createText(this._el_0,'\n                   ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'source',(null as any));
    this.renderer.setElementAttribute(this._el_2,'src','./afterLaunch.mp4');
    this.renderer.setElementAttribute(this._el_2,'type','video/mp4');
    this._text_3 = this.renderer.createText(this._el_0,'\n               ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_InaugrationComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_InaugrationComponent2(viewUtils,parentInjector,declarationEl);
}