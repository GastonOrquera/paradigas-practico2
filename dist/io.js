"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rl = void 0;
exports.input = input;
// io.ts
const readline = require("readline");
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function input(question) {
    return new Promise((resolve) => {
        exports.rl.question(question, (answer) => resolve(answer));
    });
}
