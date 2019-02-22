<p align="center">
  <img src="https://github.com/nitayneeman/vscode-puppeteer-snippets/blob/master/images/puppeteer-logo.png?raw=true" alt="Puppeteer Logo">
</p>

<h1 align="center">VS Code - Puppeteer Snippets</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=nitayneeman.puppeteer-snippets"><img src="https://vsmarketplacebadge.apphb.com/version/msjsdiag.debugger-for-chrome.svg?label=Puppeteer%20Snippets" alt="Marketplace bagde"></a>
  <a href="https://github.com/nitayneeman/vscode-puppeteer-snippets/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

## ℹ️️ Description

This Visual Studio Code extension adds predefined useful code snippets for [Puppeteer](https://pptr.dev/).

<p align="center">
  <img src="https://github.com/nitayneeman/vscode-puppeteer-snippets/blob/master/images/preview.gif?raw=true" alt="Preview">
</p>

Check out the [API](https://pptr.dev/#?product=Puppeteer&show=outline) for getting more information about the available capabilities.

## 👨🏻‍🏫 How to Use

At first, [install](vscode:extension/nitayneeman.puppeteer-snippets) the [extension](https://marketplace.visualstudio.com/items?itemName=nitayneeman.puppeteer-snippets).

Basically, there are two ways to apply the snippets:

### 1. Direct Typing
Start typing the prefix or just part of the snippet. Then, locate the snippets on the suggestions list and click on `TAB` or `ENTER`.

### 2. Command Palette
Open the Command Palette and type `Insert Snippet`. Then, simply choose the dedicated snippet.

## 📄 Snippets List

Below is attached a list of all supported snippets.

### Puppeteer

| Snippet     | Content              |
| ----------- | -------------------- |
| `p-import`  | require('puppeteer') |
| `p-connect` | puppeteer.connect    |
| `p-launch`  | puppeteer.launch     |

### Browser

| Snippet                     | Content                        |
| --------------------------- | ------------------------------ |
| `p-browser-close`           | browser.close                  |
| `p-browser-disconnect`      | browser.disconnect             |
| `p-browser-newPage`         | browser.newPage                |
| `p-browser-on-disconnected` | browser.on('disconnected',...) |

### Page

| Snippet                         | Content                         |
| ------------------------------- | ------------------------------- |
| `p-page-$`                      | page.\$                         |
| `p-page-$$`                     | page.\$\$                       |
| `p-page-$eval`                  | page.\$eval                     |
| `p-page-$$eval`                 | page.\$\$eval                   |
| `p-page-browser`                | page.browser                    |
| `p-page-click`                  | page.click                      |
| `p-page-close`                  | page.close                      |
| `p-page-content`                | page.content                    |
| `p-page-emulate`                | page.emulate                    |
| `p-page-emulateMedia`           | page.emulateMedia               |
| `p-page-focus`                  | page.focus                      |
| `p-page-goBack`                 | page.goBack                     |
| `p-page-goForward`              | page.goForward                  |
| `p-page-goto`                   | page.goto                       |
| `p-page-hover`                  | page.hover                      |
| `p-page-keyboard-down`          | page.keyboard.down              |
| `p-page-keyboard-press`         | page.keyboard.press             |
| `p-page-keyboard-sendCharacter` | page.keyboard.sendCharacter     |
| `p-page-keyboard-type`          | page.keyboard.type              |
| `p-page-keyboard-up`            | page.keyboard.up                |
| `p-page-mouse-click`            | page.mouse.click                |
| `p-page-mouse-down`             | page.mouse.down                 |
| `p-page-mouse-move`             | page.mouse.move                 |
| `p-page-mouse-up`               | page.mouse.up                   |
| `p-page-pdf`                    | page.pdf                        |
| `p-page-reload`                 | page.reload                     |
| `p-page-screenshot`             | page.screenshot                 |
| `p-page-title`                  | page.title                      |
| `p-page-url`                    | page.url                        |
| `p-page-waitFor`                | page.waitFor                    |
| `p-page-waitForFunction`        | page.waitForFunction            |
| `p-page-waitForNavigation`      | page.waitForNavigation          |
| `p-page-waitForRequest`         | page.waitForRequest             |
| `p-page-waitForResponse`        | page.waitForResponse            |
| `p-page-waitForSelector`        | page.waitForSelector            |
| `p-page-waitForXPath`           | page.waitForXPath               |
| `p-page-on-close`               | page.on('close',...)            |
| `p-page-on-console`             | page.on('console',...)          |
| `p-page-on-dialog`              | page.on('dialog',...)           |
| `p-page-on-domcontentloaded`    | page.on('domcontentloaded',...) |
| `p-page-on-error`               | page.on('error',...)            |
| `p-page-on-frameattached`       | page.on('frameattached',...)    |
| `p-page-on-framedetached`       | page.on('framedetached',...)    |
| `p-page-on-framenavigated`      | page.on('framenavigated',...)   |
| `p-page-on-load`                | page.on('load',...)             |
| `p-page-on-metrics`             | page.on('metrics',...)          |
| `p-page-on-pageerror`           | page.on('pageerror',...)        |
| `p-page-on-popup`               | page.on('popup',...)            |
| `p-page-on-request`             | page.on('request',...)          |
| `p-page-on-requestfailed`       | page.on('requestfailed',...)    |
| `p-page-on-requestfinished`     | page.on('requestfinished',...)  |
| `p-page-on-response`            | page.on('response',...)         |
| `p-page-on-workercreated`       | page.on('workercreated',...)    |
| `p-page-on-workerdestroyed`     | page.on('workerdestroyed',...)  |

### General Examples

| Snippet            | Content                           |
| ------------------ | --------------------------------- |
| `p-examples-basic` | Creates a basic skeleton example |
