# detox-boilerplate
## 依存パッケージのインストール
### Install brew packages.
Detox uses a simulator tool called applesimutils to operate the simulator.

```bash
brew tap wix/brew
brew install applesimutils
```

If you get the following error:

```
Error: You have not agreed to the Xcode license. Please resolve this by running:
  sudo xcodebuild -license accept
```

After executing `sudo xcodebuild -license accept`, execute the` brew` command again.


### Detox command line tool installed globally.

## Add Detox for project
```bash
npm install -g detox-cli
```

Add Detox config to package.json

```
yarn add -D detox
``` 

```bash
detox init -r jest
```
Create directory: e2e

And Modify package.json

```diff
  "detox": {
    "test-runner": "jest"
    }
  }
``` 

### Edit package.json

```diff
"detox": {
+  "configurations": {
+    "ios.sim.debug": {
+      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/<example>.app",
+      "build": "xcodebuild -workspace ios/<example>.xcworkspace -scheme <example> -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
+      "type": "ios.simulator",
+      "device": {
+        "type": "iPhone 11 Pro"
+      }
+    },
  "test-runner": "jest"
  }
}
```

### Start test suits

Build test:

```bash
detox build
```

Run Test:

```bash
detox test
```

Maybe, failed test:

```
 FAIL  e2e/firstTest.spec.js (75.235s)
  Example
    ✕ should have welcome screen (893ms)
    ✕ should show hello screen after tap (878ms)
    ✕ should show world screen after tap (2517ms)
``` 

## Write Test
