"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react = require("react");
const core_1 = require("@trainergo/core");
const InputFactory = () => {
    class Input extends react.Component {
        constructor() {
            super(...arguments);
            this.res = new core_1.Core().isItTrueOrFalse();
        }
        render() {
            return (<input type="text"/>);
        }
    }
    return Input;
};
exports.InputFactory = InputFactory;
