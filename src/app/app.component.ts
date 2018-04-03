import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

    ngOnInit() {
    let node = document.querySelector('#inputform');

    let input$ = Observable.fromEvent(node, 'input');
    input$.subscribe({
      next: (event: any) => document.getElementById("display").innerHTML =(` ${event.target.value}`),
      error: (err) => console.log(`Oops... ${err}`),
      complete: () => console.log(`Complete!`)
    });
  }
}

