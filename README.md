# Trialling Nightwatch.js 
## Intro
Nightwatch is a JavaScript-based, end-to-end (e2e) testing framework which typically can be used to mimic a user interacting with a website or webpages.
## Basic Setup
- You can start up a dummy test proj to get up and running. Make a new directory, say on your desktop and change into that directory.
- Ensure you have node and NPM installed which you can download from their website.
- Some commands to install and run Nightwatch from your terminal (on MAC in VS Code: control + ~):
```
npm init -y
npm --version
npm install nightwatch --save-dev
npx nightwatch
npm install chromedriver --save-dev 
```

We need to do some setup with the nightwatch.conf.js file. Namely, tell Nightwatch where our test scripts should be accessed from and the name of the browserName value. So in nightwatch.conf.js:
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

Create in your code editor, a folder containing your tests and of course it should match the src_folders value. 

Back in terminal:

```
npx nightwatch run
npx nightwatch enterYourTestFileNameHereAndFilePath.js
```

## Useful Resources
- Nightwatch [API docs] (https://nightwatchjs.org/api/) 
- Explanation of [terminal and setup config] (https://www.hashbangcode.com/article/getting-and-running-nightwatchjs)
- Video tutorials from [Testing Automation University] (https://testautomationu.applitools.com/nightwatchjs-tutorial/)