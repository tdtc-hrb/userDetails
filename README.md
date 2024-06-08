# UserDetailsClient
![chrome shot](https://gitee.com/xiaobin80/cnblogs/raw/master/images/UserDetailsClient-static.png)

# pre
```
npm i cordova -g
npm install -g @angular/cli
```


# Project
create Cordova project:
>> cordova create path [id [name]]
```
cordova create AppWrap com.tdtc.usedetails AppWrap
```
Add Platforms:
```
cd AppWrap
cordova platform add android
cordova platform add browser
```

## Angular project
- create Angular
```
cd ..
npx @angular/cli new client --no-standalone --style=css --routing=false --skip-tests
```

### connects your Angular project to Cordova
> index.html
```
<script type="text/javascript" src="cordova.js"></script>
```

## run
- Gen Angular dist files
```
cd client
ng build --output-path=../AppWrap/www --base-href=./
```

### verify
```
cd AppWrap
```
- android
```
cordova run android
```
- browser
```
cordova run browser --port=4260
```

[browser - click](http://localhost:4260/browser/index.html)


## Reference
- [build a hybrid app using cordova + angular](https://plainenglish.io/blog/build-a-hybrid-app-using-cordova-angular)
- [Import a JavaScript file into a TypeScript file](https://github.com/bobbyhadz/typescript-import-javascript-files)
- [This condition will always return true since this function is always defined.](https://stackoverflow.com/a/70004371)
- [castting window](https://stackoverflow.com/a/48072096)
