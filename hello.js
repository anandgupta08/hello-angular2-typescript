/// <reference path="../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "angular2/angular2", "messageservice"], function (require, exports, angular2_1, messageservice_1) {
    var Hello = (function () {
        function Hello(provider) {
            this.message = "Angular 2 Component";
            this.msgProvider = provider;
        }
        Hello.prototype.changeMessage = function (newMessage) {
            this.message = this.msgProvider.getMessage() + newMessage;
        };
        Hello.prototype.doneTyping = function (event) {
            if (event.which === 13) {
                var eventTarget = event.target;
                this.changeMessage(eventTarget.value);
                eventTarget.value = null;
            }
        };
        Hello = __decorate([
            angular2_1.Component({
                selector: "hello",
                appInjector: [messageservice_1.MessageProvider]
            }),
            angular2_1.View({
                templateUrl: "./views/hello.html",
                directives: [angular2_1.NgIf]
            }), 
            __metadata('design:paramtypes', [messageservice_1.MessageProvider])
        ], Hello);
        return Hello;
    })();
    exports.Hello = Hello;
});
