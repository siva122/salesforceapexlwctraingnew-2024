import { LightningElement,track } from "lwc";
export default class ReactivePropDemo extends LightningElement {
   count=0;
   Name='sample'
   pName;
   //non-primitive object and array
 countObj={count:0}

   @track productsList=[]
   handleIncrease(){
   // this.count++;
    //this.countObj.count=this.countObj.count+1;
    //this.countObj={count:this.countObj.count++,...this.countObj}
    this.countObj={...this.countObj,count:this.countObj.count++};
    console.log(' this.countObj : ',JSON.stringify(this.countObj));
   //this.countObj.count=this.countObj.count+1;
   }
   handleDecrease(){
    //this.count--;
   // this.countObj.count=this.countObj.count-1;
   //this.countObj={...this.countObj,count:this.countObj.count--}
   //this.countObj={count:this.countObj.count--,...this.countObj}
   this.countObj.count=this.countObj.count-1;


   console.log('this.countObj : ',   this.countObj);

   }
   handleChange(event){
this.Name=event.target.value;
   }
   handleProductChange(event){
 this.pName=event.target.value;
   }
   handleClick(event){
    this.productsList.push(this.pName);
    console.log('productsList : ',this.productsList);
   }
}