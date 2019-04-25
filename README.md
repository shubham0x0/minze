<p align="center">
  <img width="120px" src=".github/logo.png" />
</p>
<p align="center">
 <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg" height="22">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://install.appcenter.ms/users/mzeroes/apps/minze-2">
    <img src="https://build.appcenter.ms/v0.1/apps/75f79544-14d2-4cd5-9750-2b228d36230d/branches/staging/badge" />
 </a>  
 <a href="https://install.appcenter.ms/users/mzeroes/apps/minze-2/distribution_groups/public%20preview">
  <img
      src="https://build.appcenter.ms/v0.1/apps/75f79544-14d2-4cd5-9750-2b228d36230d/branches/master/badge" />
  </a>
  <br/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Apple-Apple.svg" height="22">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a href="">
  <img
      src="https://build.appcenter.ms/v0.1/apps/3e39cb42-80f1-4d25-a1df-11e84edf4773/branches/master/badge" />
  </a>
</p>


# Features
- Todo

## [Screenshots](.github/screenshots) 

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
Add a .env file for environment variables
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
