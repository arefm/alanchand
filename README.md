# AlanChand.com CLI

This is a command line interface for AlanChand.com. It is a simple tool that allows you to fetch latest currency rates from AlanChand.com.

## Installation

You need to have Node.js installed on your machine to be able to use this tool.
You can download it from [here](https://nodejs.org/en/download/).

`$ npx alanchand` or `$ npm install -g alanchand` (to install it globally)

## Usage

`$ alanchand` (only if you installed it globally)

By default, it fetches the latest currency rates for the following currencies:

- US Dollar (USD)
- British Pound (GBP)
- Euro (EUR)
- Swedish Krona (SEK)
- Canadian Dollar (CAD)
- Australian Dollar (AUD)
- Turkish Lira (TRY)
- United Arab Emirates Dirham (AED)

However, you can also fetch the rates for any other currency by providing the currency code as an argument.

`$ alanchand -c <currency-code>` or `$ alanchand --currencies <currency-code>`

For example, to fetch the latest currency rates for JPY (Japanese Yen), you can run the following command:

`$ alanchand -c jpy` or `$ alanchand --currencies jpy`

Also, you can fetch the rates for multiple currencies at once by providing multiple currency codes separated by commas.

`$ alanchand -c <currency-code-1>,<currency-code-2>,...` or `$ alanchand --currencies <currency-code-1>,<currency-code-2>,...`

For example, to fetch the latest currency rates for JPY (Japanese Yen) and CNY (Chinese Yuan), you can run the following command:

`$ alanchand -c jpy,cny` or `$ alanchand --currencies jpy,cny`

Please consider that the total number of currencies should not exceed 10.

---

&copy; 2025 [AlanChand.com](https://alanchand.com)

---

I hope you find it useful too ;)

Aref
