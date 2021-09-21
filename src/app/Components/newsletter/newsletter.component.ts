import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "src/app/Models/Account/OnBoard";

@Component({
    selector: 'newsletter',   
    template: `
<fieldset class="newsletter">
    
    <legend>Newsletter</legend>
    
    <h5>Hello {{user?.firstName}},
        enter your email below to subscribe:</h5>
    <form>
        
        <input #email type="email" name="email" placeholder="Enter your Email">
      
        <input  type="button" class="button button-primary" value="Subscribe"
                (click)="subscribeToNewsletter(email.value)">
    </form>
          
</fieldset>
      
`,changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent  {

    @Input()
    user: User;

    @Output()
    subscribe = new EventEmitter();

    subscribeToNewsletter(email:string) {
        this.subscribe.emit(email);
    }

}