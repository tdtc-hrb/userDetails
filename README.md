# User Details Client For Cordova
- Prepare
```
npm i cordova -g
npm install -g @angular/cli
```

## Cordova project
- create
```
cordova create AppWrap com.tdtc.usedetails AppWrap
```
> cordova create path [id [name]]

- Add Platforms
```
cd AppWrap
cordova platform add browser
```

## Angular project
index.html:
```
<script type="text/javascript" src="cordova.js"></script>
```
connects your Angular project to Cordova

## run
Gen Angular dist files:
```
cd client
ng build --output-path=../AppWrap/www --base-href=./
```

### verify
- [browser](http://localhost:4260/browser/index.html)
```
cd AppWrap
cordova run browser --port=4260
```


## Reference
- [build a hybrid app using cordova + angular](https://plainenglish.io/blog/build-a-hybrid-app-using-cordova-angular)
- [castting window](https://stackoverflow.com/a/48072096)
