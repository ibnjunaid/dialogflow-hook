"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var conversation_1 = require("@assistant/conversation");
var app = conversation_1.conversation({
    debug: true
});
app.handle('start_scene_initial_prompt', function (conv) {
    console.log('Start scene: initial prompt');
    conv.overwrite = false;
    conv.scene.next = { name: 'actions.scene.END_CONVERSATION' };
    conv.add('Hello world from fulfillment');
});
var expApp = express_1.default();
expApp.use(express_1.default.json(), app);
expApp.listen(3000, function () {
    console.log('App listening');
});
