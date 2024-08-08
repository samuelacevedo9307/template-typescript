import { navigateTo } from '../Router';

export function logOut() {

  localStorage.removeItem('user');
  
  navigateTo(`/login`);
}
