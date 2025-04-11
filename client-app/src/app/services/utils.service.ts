import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  setValueToLocalStorage(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  getValueFromLocalStorage(name: string) {
    return localStorage.getItem(name)
  }

  removeValueFromLocalStorage(name: string): void {
    localStorage.removeItem(name);
  }

  removeAllValuesFromLocalStorage() {
    localStorage.clear()
  }

}
