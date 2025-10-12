import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { About } from './components/about/about';
import { authGuard } from './guards/auth-guard';
import { Readme } from './components/home/child/readme/readme';
import { Footer } from './components/footer/footer';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    title: 'Home Page',
    children: [
      //   {
      //     path: '',
      //     redirectTo: 'readme',
      //     pathMatch: 'full',
      //   },
      {
        path: 'readme',
        component: Readme,
      },
    ],
    canActivate: [authGuard],
  },
  { path: 'profile', component: Profile, title: 'profile', canActivate: [authGuard] },
  { path: 'about', component: About, title: 'about', canActivate: [authGuard] },
  { path: 'login', component: Login, title: 'login' },
  { path: '**', component: NotFound, title: 'notfound' },
];
