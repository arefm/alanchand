#!/usr/bin/env node

import { program } from 'commander'
import AlanChandApi from "./alanchand.service.js";
import GenerateTable from "./generateTable.js";

(async () => {
  try {
    program
      .option('-c, --currencies <char>')
    program.parse();
    const options = program.opts();
    const currencies = typeof options.currencies !== 'undefined' ? options.currencies.split(',') : [];

    process.stdout.write("connecting to alanchand.com, please wait...\r")

    const ratesData = await AlanChandApi(currencies);
    GenerateTable(ratesData);

  } catch (error) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('Failed to get rates from alanchand.com, please try again later.')
  }
})();

