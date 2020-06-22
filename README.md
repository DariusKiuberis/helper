# Helpers

Visit [https://github.com/DariusKiuberis/helper](https://github.com/DariusKiuberis/helper) for more info.<br>
Install: npm i @darius-kiuberis/helper <br>
Use: import {log, random, type} from '@darius-kiuberis/helper'

### `List of available helpers:`

#### `log(any)`

- log{anything, this, and, this} works like console.log, but on every log generates random color and serial number.

#### `random(type, val1, val2)`

- random('number', 30 , 200) returns random number between 30 and 200. Default from 1 to 99.
- random('string', 11) returns random string text 11 characters long. Default 5.
- random('array', 8 , 5) returns 8 arrays with 5 nested arrays inside and random elements. Default 3 arrays with 3 nested.

#### `type(any)`

- type(any-value) returns correct type of passed variable.
