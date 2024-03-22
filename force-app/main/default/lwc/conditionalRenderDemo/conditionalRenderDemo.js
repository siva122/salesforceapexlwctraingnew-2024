import { LightningElement } from "lwc";
export default class ConditionalRenderDemo extends LightningElement {
   isShow=false;
    checkBoxChangeHandler(event){
  this.isShow=event.target.checked;
    }
}