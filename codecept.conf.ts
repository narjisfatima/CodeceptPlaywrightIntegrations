import {setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  mocha:{
    reporter: 'mochawesome', 
    reporterOptions :{
      reportDir: './output/html',
      reportFilename: 'report', 
      inlineAssets: true, 
      saveHtml: true, 
      saveJson: true
    }
  },
  name: 'CodeceptPlaywrightIntegrations'
}