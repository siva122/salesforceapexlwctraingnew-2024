import { LightningElement } from "lwc";
export default class ParentCompDemo extends LightningElement {
    // message='sample data';
    // discountValue=100;
    // isShow;
    parentData;


  obj={
        sampleData:'sample',
        discountData:'discunt data',
       isGetData:true,
       courses:['js','lwc']
       

    }
  
    handleClick(event){
       // this.parentData =this.template.querySelector('lightning-input ').value;
      // this.template.querySelector('c-child-comp-demo').message=this.refs.name.value;
      this.refs.child.message=this.refs.name.value;
      this.refs.child.childMethod(this.refs.name.value);
//this.parentData=this.refs.name.value;
    }

}