// io.ts
import * as readline from "readline";

export const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function input(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}