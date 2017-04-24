import { PLATFORM } from 'aurelia-pal';
import { HttpClient } from 'aurelia-http-client';

export class App {
  constructor() {
    this.message = "";
    this.http = new HttpClient();
    this.firstName = "Stan";
    this.lastName = "Pribytkovsky";
    this.friends = [];
    this.potentialFriend = []
  }

  activate() {
    this.message = "Hello from Aurelia!";
    // return this.http.get("../src/books.json")
    //   .then(response => {
    //     this.books = response.content;
    //   });
  }

  changeMessage() {
    if (this.message === "Hello from Aurelia!")
      this.message = "Goodbye!";
    else {
      this.message = "Hello from Aurelia!";
    }
  }



  get fullName() {
    return `${this.firstName}, ${this.lastName}`;
  }
}
