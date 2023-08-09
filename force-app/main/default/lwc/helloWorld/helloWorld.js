import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    // get the greeting value
    this.greeting = event.target.value;
  }
}