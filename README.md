<p align="center">
  <img width="120px" src=".github/logo.png" />
</p>

---

<p align="center">
  <a href="https://appcenter.ms/users/mzeroes/apps/MINZE/build/branches/">
    <img
      src="https://build.appcenter.ms/v0.1/apps/09f0a46d-938b-41e1-b95c-c943560ca990/branches/development/badge" />
    <img
      src="https://build.appcenter.ms/v0.1/apps/09f0a46d-938b-41e1-b95c-c943560ca990/branches/master/badge" />
  </a>
</p>

---

# Features
- Todo


# Tech

This app uses a number of open source projects to work properly:
* [TypeScript]
* [Node.js]
* [Express]

# Installation

## Requires

 - [Node.js](https://nodejs.org/)
 - [React-native](https://facebook.github.io/react-native/)

Install the npm dependencies

```sh
$ npm install
```
Add a .env file for enviroment variables
matching the .env.demo file

**On first Run** :
To install App on Device/Emulator:
```sh
$ npm run android
```

Running Metro Bundler

```sh
$ npm run start
```
For Wireless connection do:

Connect device using usb and then run
```sh
$ adb tcpip 55555
```

```sh
$ adb connect [IP ADDRESS OF PHONE]:55555
```

(optional) Test:
```sh
$ npm run test
```

Building Apk file
```sh
$ npm run apk
```
---

### Dependencies
- appcenter
- appcenter-analytics
- appcenter-crashes
- react
- react-native
- react-native-firebase
- react-native-unimodules


### Todos

 - Write tests
 - Add Night Mode

### License

- See [LICENSE](/LICENSE)

[//]: # ()
   [node.js]: <http://nodejs.org>
   [TypeScript]: <https://www.typescriptlang.org/>
   [express]: <http://expressjs.com>
