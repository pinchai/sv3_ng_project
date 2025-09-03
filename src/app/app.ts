import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Footer} from './footer/footer';

import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, UpperCasePipe} from '@angular/common';
import {TestPipe} from './custom_pip/test-pipe';
import {SetPrefixCodePipe} from './custom_pip/set-prefix-code-pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
