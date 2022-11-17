# UserDetailsClient
![chrome shot](https://gitee.com/xiaobin80/cnblogs/raw/master/images/UserDetailsClient-static.png)

- NodeJS [v18.x](https://nodejs.org/dist/latest-v18.x/)
- [Angular](https://tdtc-hrb.github.io/cnblogs/post/js-angular-app/)


## Deploy
```bash
npm install --save-dev
```

```bash
npm audit fix
```

### Run
Note: The java version of the server[demo-jpa-spring-boot2-mysql](https://github.com/xiaobin80/demo-jpa-spring-boot2-mysql)) does not implement post!

- For dotnet
```bash
ng serve --port 4260 --open
```
- For java    
Change as follows: user.service.ts
```
return  this.http.get<UserModel[]>(this.url_java);
```
Then execute:    
```bash
ng serve --port 4200 --open
```


## Reference
- [How To Make HTTP Requests In Angular Using Observables](https://vegibit.com/how-to-make-http-requests-in-angular-using-observables)
- [How To Use An Interface In Angular](https://vegibit.com/how-to-use-an-interface-in-angular/)
- [Create a list of html](https://vegibit.com/angular-styles-vs-styleurls/)
- [Angular Service Dependency Injection](https://vegibit.com/angular-service-dependency-injection/)
- [Angular HTTP Data Fetch](https://errorsea.com/angular-http-data-fetch/)
- [An unhandled exception occurred: cannot find module '@angular-devkit/build-angular/package.json'](https://quizdeveloper.com/faq/resolved-an-unhandled-exception-occurred-cannot-find-module-angular-devkitb-aid62)
- [nodejs 17: digital envelope routines::unsupported](https://github.com/webpack/webpack/issues/14532)
