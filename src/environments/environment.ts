// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDWxoGAlUcc4j5MQU7-q_epsahrzi-yCiQ',
    authDomain: 'meine-tonies.firebaseapp.com',
    databaseURL: 'https://meine-tonies.firebaseio.com',
    projectId: 'meine-tonies',
    storageBucket: 'meine-tonies.appspot.com',
    messagingSenderId: '155276706891'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
