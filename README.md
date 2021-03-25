# Helpers

Visit [https://github.com/DariusKiuberis/helper](https://github.com/DariusKiuberis/helper) for more info.<br>
Install: npm i @darius-kiuberis/helper <br>
Use: import {log, random, type} from '@darius-kiuberis/helper'

### `List of available helpers:`

#### `log(any)`

- log(anything, this, and, this)<br>
  > works like console.log, but on every log generates random color and serial number.

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




### Scripts overview

Husky:  you can just write git commit -m "bla bla" -n
the -n will get you bypass the hooks

#### `npm run start:dev`
Starts the application in development using nodemon and ts-node to do cold reloading.

#### `npm run build`
Builds the app at build, cleaning the folder first.

#### `npm run start`

Starts the app in production by first building the project with npm run build,
and then executing the compiled JavaScript at build/index.js
