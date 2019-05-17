# react-native-minze-native

## Getting started

`$ npm install react-native-minze-native --save`

### Mostly automatic installation

`$ react-native link react-native-minze-native`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-minze-native` and add `RNMinzeNative.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMinzeNative.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNMinzeNativePackage;` to the imports at the top of the file
- Add `new RNMinzeNativePackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-minze-native'
   project(':react-native-minze-native').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-minze-native/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-minze-native')
   ```

#### Windows

[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNMinzeNative.sln` in `node_modules/react-native-minze-native/windows/RNMinzeNative.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app

- Add `using Minze.Native.RNMinzeNative;` to the usings at the top of the file
- Add `new RNMinzeNativePackage()` to the `List<IReactPackage>` returned by the `Packages` method

## Usage

```javascript
import RNMinzeNative from 'react-native-minze-native';

// TODO: What to do with the module?
RNMinzeNative;
```
