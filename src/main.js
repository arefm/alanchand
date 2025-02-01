#!/usr/bin/env node

import AlanChandApi from "./alanchand.service.js";
import GenerateTable from "./generateTable.js";

const main = async () => {
  try {
    process.stdout.write("connecting to alanchand.com, please wait...\r")

    const ratesData = await AlanChandApi();
    GenerateTable(ratesData);

  } catch (error) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('Failed to get rates from alanchand.com, please try again later.')
  }
};

main()

