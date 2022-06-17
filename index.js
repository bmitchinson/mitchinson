#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const card = boxen(
  `${chalk.bold("Ben Mitchinson")}
Denver, CO 🏔
${chalk.bold("-".repeat(40))}

${chalk.bold("Work:")}    Accenture (Remote)
${chalk.bold("Web:")}     https://mitchinson.dev
${chalk.bold("GitHub:")}  https://github.com/bmitchinson
${chalk.bold("Twitter:")} https://twitter.com/115bwm
${chalk.bold("Spotify:")} https://open.spotify.com/user/115bwm
${chalk.bold("Music:")}   https://tinyurl.com/3colorchal

${chalk.bold("Card:")} npx mitchinson`,
  { borderColor: "blue", padding: 1 }
);

console.log(card);
