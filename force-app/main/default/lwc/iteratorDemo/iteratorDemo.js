import { LightningElement } from "lwc";
export default class IteratorDemo extends LightningElement {
    contacts = [
        {
          Id: 1,
          Name: "Amy Taylor",
          Title: "VP of Engineering",
        },
        {
          Id: 2,
          Name: "Michael Jones",
          Title: "VP of Sales",
        },
        {
          Id: 3,
          Name: "Jennifer Wu",
          Title: "CEO",
        },
        {
            Id: 4,
            Name: "Mark Benioff",
            Title: "CEO",
          },
      ];
}