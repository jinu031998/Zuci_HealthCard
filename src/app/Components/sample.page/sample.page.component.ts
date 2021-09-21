import { Component } from "@angular/core";
import { User } from "src/app/Models/Account/OnBoard";

@Component({
    selector: 'sample-page',
    template: `
    <newsletter [user]="user" (subscribe)="subscribe($event)"></newsletter>
    <button (click)="changeUserName()">Change User Name</button>
`})
export class SampleComponent {

    user: User = {
        firstName: 'Alice',
        lastName: 'Smith'
    };

    constructor() {

    }

    subscribe(email:Event) {
        console.log(email);
    }

    changeUserName() {

         this.user = {
        firstName: 'Bob',
        lastName: 'Smith'
    }
    }

}