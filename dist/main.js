"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var actions_on_google_1 = require("actions-on-google");
var app = actions_on_google_1.dialogflow({
    debug: true
});
app.intent('Default Welcome Intent', function (conv) {
    conv.ask('Hi, how is it going?');
    conv.ask("Here's a picture of a cat");
    conv.ask(new actions_on_google_1.Image({
        url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
        alt: 'A cat',
    }));
});
app.intent('listAppointsByDist', function (conv) {
    conv.ask("so you selected district " + conv.parameters.dist + " in state " + conv.parameters.state);
    conv.followup('age');
});
app.intent('listAppointsByPin', function (conv) {
    conv.ask("so you selected Pin " + conv.parameters.pin_number);
    conv.followup('age');
});
app.catch(function (conv) {
    conv.close('Theres some glitch');
});
var expApp = express_1.default();
expApp.use(express_1.default.json(), app);
expApp.listen(process.env.PORT || 6000, function () {
    console.log('App listening');
});
