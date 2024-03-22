import { LightningElement,track } from "lwc";
export default class ParentSlotDemo extends LightningElement {
    slot1Name='name1';
  @track  obj={
    name:'sample',
    age:23,
    address:{
        city:'HYD'
    }
  }
}