import Table from 'cli-table3';

function generateTable(data) {
  if (!data || data.length === 0) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("No data received from alanchand.com, please try again later.");
    return;
  }
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  const head = Object.keys(data[0]);
  const table = new Table({ head });

  data.forEach(row => {
    const values = head.map(key => row[key] !== undefined ? row[key] : ""); // Handle missing keys
    table.push(values);
  });

  console.log(table.toString());
  console.log('Source: www.alanchand.com')
}

export default generateTable;
