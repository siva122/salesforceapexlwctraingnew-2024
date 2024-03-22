import { LightningElement,api } from "lwc";
export default class ChildCompDemo extends LightningElement {
    @api sampleData;
    @api discountData;
    @api isGetData;
    @api courses;
@api sampleObj;
@api message;
 parentMessage;
handleClick(event){
    console.log('cliked');
    console.log('inital : ',JSON.stringify( this.sampleObj));
// this.obj = { ...this.obj, msg: this.obj.msg + "!" };
    this.sampleObj={...this.sampleObj,location:'USA',sampleData:this.sampleObj.sampleData+'add data'};
    console.log('OUTPUT : ',JSON.stringify( this.sampleObj));
}
 @api 
 childMethod(msg){
 this.parentMessage=msg;
}
}