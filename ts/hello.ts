/// <reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View, NgIf, Inject} from "angular2/angular2";
import {MessageProvider} from "messageservice";

@Component({
	selector : "hello",
	viewInjector : [MessageProvider]
	})
@View({
	templateUrl : "./views/hello.html",
	directives : [NgIf]
	})
export class Hello {
	message : string;
	msgProvider : MessageProvider;
	constructor(provider : MessageProvider){
		this.message = "Angular 2 Component";
		this.msgProvider = provider;
	}
	changeMessage(newMessage : string){
		this.message = this.msgProvider.getMessage() + newMessage;
	}
	doneTyping(event : KeyboardEvent){
		if(event.which === 13){
			var eventTarget:HTMLInputElement = <HTMLInputElement>event.target;
			this.changeMessage(eventTarget.value);
			eventTarget.value = null;
		}
	}
}
