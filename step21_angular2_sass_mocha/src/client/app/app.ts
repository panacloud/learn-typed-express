import {Component, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template:`
        <h1>Typed and SASS Styled Angular 2 and Node.js Web App</h1>
    `,
    styleUrls: ['app/app.css']
})
class AppComponent { }
bootstrap(AppComponent);