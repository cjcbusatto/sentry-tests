# Sentry-tests

## Introduction

Sentry is an open-source company, providing an application monitoring platform that helps developers to identify issues in real-time.

Exceptions, errors or any app crash create issues on a dashboard including stack trace and many other relevant data for debugging.

## Application

### Usage

The code is stupidly simple, it requires Sentry and generates a `ReferenceError`. Once the error is throw, Sentry dashboard tracks it including how many times it has happened so far.

```sh
$ yarn install
$ node index.js
ReferenceError: undefinedFunction is not defined
    at Object.<anonymous> (/Users/cbusa/github/sentry-tests/index.js:10:1)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11
```

## Sentry.io dashboard

![](assets/dashboard.png)

![](assets/dashboard2.png)

## LICENSE

MIT License

Copyright (c) 2019 Claudio Busatto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
