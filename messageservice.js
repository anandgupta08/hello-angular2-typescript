define(["require", "exports"], function (require, exports) {
    var MessageProvider = (function () {
        function MessageProvider() {
        }
        MessageProvider.prototype.getMessage = function () {
            return "Hi, ";
        };
        return MessageProvider;
    })();
    exports.MessageProvider = MessageProvider;
});
