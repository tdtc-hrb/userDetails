import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import isCordova from './isCordova';

const bootstrap = () => {
	platformBrowserDynamic().bootstrapModule(AppModule, {
	  ngZoneEventCoalescing: true
	})
	  .catch(err => console.error(err));
};
if (isCordova()) {
  document.addEventListener(
    "deviceready",
    () => {
      bootstrap();
    },
    false
  );
} else {
  bootstrap();
}
