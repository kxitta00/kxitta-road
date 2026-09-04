import { createPlayer } from "./charector";
import { Map } from "./map";
import { runTerminalQuest } from "./terminal-quest";

console.log("Welcome to Terminal Quest!");
const playerName = prompt("Enter your character's name: ") as string;
const player = createPlayer(playerName, 100);

runTerminalQuest(player);