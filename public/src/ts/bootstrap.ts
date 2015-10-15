/// <reference path="typings/tsd" />

import { bootstrap, bind } from 'angular2/angular2';
import { AppComponent } from 'components/app';



// import { bootstrap, bind, Component, View } from 'angular2/angular2';
// import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

// declare var System:any;

// @Component({
//     selector: 'demo-app',
//     templateUrl: './demo-app.html',
//     directives:[DemoPage, About, ROUTER_DIRECTIVES]
// })

// @RouteConfig([
//     new Route({path: '/', component: DemoPage, as: 'Home'}),
//     new Route({path: '/about/:id', component: About, as: 'About'}),
//     new AsyncRoute({
//         path: '/lazy',
//         loader: () => ComponentHelper.LoadComponentAsync('LazyLoaded','./components/lazy-loaded/lazy-loaded'),
//         as: 'Lazy'
//     })
// ])
 
// class MyDemoApp {

//     router: Router;
//     location: Location;

//     constructor(router: Router, location: Location) {
//         this.router = router;
//         this.location = location;
//     }

//     getLinkStyle(path) {
//         return this.location.path() === path;
//     }
// }

// class ComponentHelper{

//     static LoadComponentAsync(name,path){
//         return System.import(path).then(c => c[name]);
//     }
// }

bootstrap(AppComponent, []);