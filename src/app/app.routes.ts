import {Routes} from '@angular/router';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Home} from './home/home';
import {Cart} from './cart/cart';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  {path: 'cart', component: Cart}
];
