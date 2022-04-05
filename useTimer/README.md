<h1 align="center">Welcome to use-simple-timer 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/use-simple-timer" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/use-simple-timer.svg">
  </a>
  <a href="https://github.com/danifullstackengineer/useTimer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/danifullstackengineer/useTimer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/danifullstackengineer/useTimer/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/danifullstackengineer/use-simple-timer" />
  </a>
</p>

> Simple useTimer Hook for React

### 🏠 [Homepage](https://github.com/danifullstackengineer/useTimer#readme)

## Install

```sh
npm install use-simple-timer
```

## Usage

```sh
import useTimer from 'use-simple-timer';

const [{seconds, setSeconds, toggle, reset, isActive, setIsActive, isPaused, setIsPaused}] = useTimer()

```

## Available variables

```sh
seconds:number -> The seconds that passed.

setSeconds:React.Dispatch<React.SetStateAction<number>> -> Sets the seconds to a value(use milliseconds, i.e. if you want to set the seconds to 3, then setSeconds(3000)).

toggle:()=>void -> toggles the isActive variable.

reset:()=>void -> resets the timer(i.e. if seconds is 3, then after calling reset, seconds will be 0. Does not stop the timer).

isActive:boolean -> returns true if timer is active, false if it is stopped.

setIsActive:React.Dispatch<React.SetStateAction<boolean>> -> Sets isActive.

isPaused:boolean -> returns true if timer is paused, false if it is not paused.

setIsPaused:React.Dispatch<React.SetStateAction<boolean>> -> Sets isPaused.
```

## Author

👤 **Baba Dan Constantin**

- Website: Baba Dan Constantin
- Github: [@danifullstackengineer](https://github.com/danifullstackengineer)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/danifullstackengineer/useTimer/issues). You can also take a look at the [contributing guide](https://github.com/danifullstackengineer/useTimer/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Baba Dan Constantin](https://github.com/danifullstackengineer).<br />
This project is [MIT](https://github.com/danifullstackengineer/useTimer/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
