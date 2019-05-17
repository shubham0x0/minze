<a href="https://github.com/mzeroes/minze">
  <p align="center">
    <img width="120px" src=".github/logo.png" />
  </p>
<h1 align="center" style="font-family: monospace">Minze</h1>
</a>

<p align="center">
 <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg" height="22">&nbsp;&nbsp;
 <a href="https://install.appcenter.ms/users/mzeroes/apps/minze-2/distribution_groups/public%20preview">
  <img
      src="https://build.appcenter.ms/v0.1/apps/75f79544-14d2-4cd5-9750-2b228d36230d/branches/master/badge" />
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" height="22">&nbsp;&nbsp;
   <a href="https://install.appcenter.ms/users/mzeroes/apps/minze-1/distribution_groups/public%20preview">
  <img
      src="https://build.appcenter.ms/v0.1/apps/3e39cb42-80f1-4d25-a1df-11e84edf4773/branches/master/badge" />
  </a>
</p>

---

Order Food, drinks and groceries from your favorite places & track on the go, with the Minze app.

### Features

- Easy to use.
- Safe & light weight.
- anything else.

---

> ### Android : [Download](https://install.appcenter.ms/users/mzeroes/apps/minze-2/distribution_groups/public%20preview)
>
> ### IOS : [Download](https://install.appcenter.ms/users/mzeroes/apps/minze-1/distribution_groups/public%20preview)

## Tech

This app uses a number of open source projects to work properly:

- React Native
- React Native Firebase
- React Native Maps
- React Native Unimodules
- App center
- Lottie Animations

### Todos

- Write tests
- Add Themeing/ Light or Dark toggle

### Building

> If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/mzeroes/minze.git`

- 1.2) `cd minze` - cd into newly created project directory.
- 1.3) Install NPM packages by running `yarn`
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** No additional steps for android here.

#### 2) Link assets to Project

- run `yarn run assets`

#### 3) Add `Google Services` files (plist & JSON)

- 3.1) **[iOS]** Follow the `add firebase to your app` instructions [here](https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app) to generate your `GoogleService-Info.plist` file if you haven't done so already - use the package name generated previously as your `iOS bundle ID`.
- 3.2) **[iOS]** Place this file in the `ios/` directory of your project.
  - Once added to the directory, add the file to your Xcode project using 'File > Add Files to "[YOUR APP NAME]"…' and selecting the plist file.
- 3.3) **[Android]** Follow the `manually add firebase` to your app instructions [here](https://firebase.google.com/docs/android/setup#manually_add_firebase) to generate your `google-services.json` file if you haven't done so already - use the package name generated previously as your `Android package name`.
- 3.4) **[Android]** Place this file in the `android/app/` directory of your project.

#### 4) Start your app

- Start the react native packager, run `yarn run start` or `npm start` from the root of your project.
- **[iOS]** Build and run the iOS app, run `npm run ios` or `yarn run ios` from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
- **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `npm run android` or `yarn run android` from the root of your project.

#### 5) Post Install

Add a .env file for environment variables
matching the .env.demo file

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

### Generator

- You need node > 6 installed
- Ruby > 2.2.3
- Bundler installed (gem install bundler)
- Yeoman installed (npm i -g yo)
- Yarn installed

```
npm install -g yo generator-rn-toolbox
```

### Fastlane

- Install fastlane

```
sudo gem install bundler
sudo gem install fastlane -NV

bundle exec fastlane
```

---

<!-- Add all the dependencies that req linking -->

### Dependencies that requires linking

- appcenter
- codepush
- react-native-firebase
- react-native-unimodules
- react-native-vector-icons
- react-native-svg
- react-native-screens
- react-native-text-input-mask
- react-native-maps
- lottie-react-native
- react-native-linear-gradient
- react-native-splash-screen

## Screenshots

- See [Screenshots](/.github/screenshots/README.md)

### License

- See [LICENSE](/LICENSE)

<!--
    ------------
    NOTE TO SELF
    ------------
    IOS BUILDS needs to do setup for linking react-native configs
    see: https://github.com/luggit/react-native-config
    Need to configure IOS push notification also via APN service which req dev account :(
    see: https://appcenter.ms/users/mzeroes/apps/MINZE-1/push/notifications
 -->
