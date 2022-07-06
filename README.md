"# react-native-app" 


*********** run application normally ************
npm start
*************************************************


*********** pull force *************************
git reset --hard
git clean -fd
git pull
*************************************************

*********** build apk for android *************************
standalone apk ==> expo build:android -t apk 
bundle for a repository ==> expo build:android 
*************************************************


*********** adb shells *************************
adb devices
adb connect 127.0.0.1:5555 
adb kill-server
adb -s 127.0.0.1:5555 shell
