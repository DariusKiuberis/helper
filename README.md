# Cross enviroment helpers, works on browsers or nodejs. <br>

**Install: npm i @darius-kiuberis/helper** <br>
**Use: import {log, random, type} from '@darius-kiuberis/helper'**

---

### `Examples:`

#### `log(any)`
### Features: detects enviroment, logs only if "development".

- log(oneValue)
  > logs like console.log(oneValue)
- log(anything, this, and, this)<br>
  > on every log adds number.
- log( { logConfig {bold: true} }, value1, value2, value3, and, etc )
  > can customise logs by passing `logConfig` object. <br>
    here is available API:

  | property      | value                            | default  | browser | node  | description                   | DONE?  |
  | ------------- | -------------------------------- | -------- | ------- | ----- | ----------------------------- | ------ |
  | production    | true                             | false    | yes     | yes   | logs in production enviroment | no/no  |
  | indent        | 4                                | 3        | no      | yes   | indentation for objects (1-10)| -/yes  |
  | bold          | true                             | false    | yes     | yes   | bold text                     | no/yes |
  | blink         | true                             | false    | yes     | yes   | text is blinking              | no/no  |
  | bright        | true                             | false    | yes     | yes   | text is bright                | no/no  |
  | bgColor       | 'black', 'blue', 'green', 'pink' | 'purple' | yes     | yes   | background color              | no/yes |
  |               | 'red', 'yellow', 'aqua', white'  |          | yes     | yes   |                               |        |
  | bgRandom      | true                             | false    | yes     | yes   | random background color       | no/no  |
  | dim           | true                             | false    | yes     | yes   | text is dimmed                | no/no  |
  | textColor     | 'black', 'blue', 'green', 'pink' | 'white'  | yes     | yes   | text color                    | no/yes |
  |               | 'red', 'yellow', 'aqua', white'  |          | yes     | yes   |                               |        |
  | underscore    | true                             | false    | yes     | yes   | list number underscore        | no/yes |
  | numbers       | true                             | false    | yes     | yes   | list number                   | no/yes |
  | numbersRandom | true                             | false    | yes     | yes   | random list number (1-999)    | no/yes |

#### `random(type, val1, val2)`

- random('number', 30 , 200)<br>
  > returns random number between 30 and 200. Default from 1 to 99.
- random('string', 11)<br>

  > returns random string text 11 characters long. Default 5.

- random('array', 8 , 5)<br>
  > returns 8 arrays with 5 nested arrays inside and random elements. Default 3 arrays with 3 nested.

#### `type(any)`

- type(any-value)<br>
  > returns correct type of passed variable.

---

## Scripts overview

Husky: you can just write `git commit -m "blah blah" -n` <br>
NOTE: the `-n` will get you bypass the hooks.

#### `npm run start:dev`

Starts the application in development using nodemon and ts-node to do cold reloading.

#### `npm run build`

Builds the app at build, cleaning the folder first.

#### `npm run start`

Starts the app in production by first building the project with npm run build,
and then executing the compiled JavaScript at build/index.js

---

### `For local development:`

- using `npm pack`:
  > ~/package-name $ `npm run build` <br>
  > ~/package-name $ `npm pack` <br>
  > ~/package-name $ `cp darius-kiuberis/helper-0.0.0.tgz ~` <br>
  > ~/workspace/some-application $ `npm install ~/darius-kiuberis/helper-0.0.0.tgz`

- using `yalc` (npm i yalc -g):
  - add: <br>
    > ~/package-name $ `npm run prod` <br>
    > ~/some-application $ `yalc add @darius-kiuberis/helper`<br>
  - update: <br>
    > ~/package-name $ `npm run prod` <br>
    > ~/some-application $ `yalc update @darius-kiuberis/helper`<br>
    > ~/some-application $ `CTRL + C && npm start`<br>
  - remove: <br>
    > ~/some-application $ `npm uninstal @darius-kiuberis/helper` <br>
    > ~/some-application $ `yalc remove @darius-kiuberis/helper` <br>
