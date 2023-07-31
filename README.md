# Trialling Nightwatch.js 🦉
## Intro
Nightwatch is a JavaScript-based, end-to-end (e2e) testing framework which typically can be used to mimic a user interacting with a website or webpages. I've used it here to test user interactions such as: 
- button or link clicks
- modal activation
- asserting text/headings
- taking screenshots as a before and after check.
## Basic Setup 🛠️
1. Make a new directory, say on your desktop and change into that directory.
2. Ensure you have node and NPM installed.
3. Some commands to install and run Nightwatch from your terminal (on MAC in VS Code: control + ~):
```
npm init -y
npm --version
npm install nightwatch --save-dev
npx nightwatch
npm install chromedriver --save-dev 
```

4. We need to do some setup with the nightwatch.conf.js file. Namely, tell Nightwatch where our test scripts should be accessed from and the name of the browserName value. So in nightwatch.conf.js:
- Pass in the folder name of the test scripts. In our case, we called the folder 'tests'.
- Pass in the browser name under the desiredCapabilities object. In our case, it was 'chrome'.

```
module.exports = {
src_folders: ['tests'],
...
desiredCapabilities: {
        browserName : 'chrome'
      },
...
}
```

5. Create in your code editor, a folder containing your tests and of course it should match the src_folders value. 
6. Ensure your version of browser (using Chrome for this repo) matches the driver version. Check out the debugging section below.

Back in terminal:

```
npx nightwatch run
npx nightwatch enterYourTestFileNameHereAndFilePath.test.js
```

## Useful Resources 📚
- Nightwatch [API docs] (https://nightwatchjs.org/api/) 
- Explanation of [terminal and setup config] (https://www.hashbangcode.com/article/getting-and-running-nightwatchjs)
- Video tutorials from [Testing Automation University] (https://testautomationu.applitools.com/nightwatchjs-tutorial/)
- Screenshots for error events can be turned on in nightwatch.conf.js. Otherwise, you can take screenshots for 'successful' events or even intermediary steps. This resource seemed to work for me: https://testersdock.com/nightwatch-js-screenshots/

## Debugging 🐛

- // debugger;
- // .perform(() => {debugger})

- node --inspect -brk node_modules/.bin/nightwatch -- tests/homepage.test.js
- node --inspect -brk node_modules/.bin/nightwatch -- --tag smoke-homepage
- chrome://inspect/#devices
- Under Remote Target, click inspect link. Then run the script execution (play btn top-right)
- Adding debugger in the script automatically stops the execution at the line where this keyword is written. 
- Alternatively, using the .perform() closure above also stops the script.
- Using the debugger tool is useful in checking state of interactive components right before an execution event.

### Maintaining Versions 🧰
After returning to this project twice about 6 months aprt, my Chrome Browser was incompatible with the Webdriver used to run the browser context. Went to (ChromeDriver website)[https://chromedriver.chromium.org/downloads] and matched their version number with my browser version: download the chromedriver zip file and drag and drop chromedriver.exe into node_modules/.bin/ folder.
I had an issue with Chrome Version 115 but no equivalent web driver. Went here (115 version) [https://googlechromelabs.github.io/chrome-for-testing/#stable] downloaded this: https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/115.0.5790.102/mac-x64/chromedriver-mac-x64.zip