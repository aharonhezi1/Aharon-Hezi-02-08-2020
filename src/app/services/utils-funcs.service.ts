import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsFuncsService {
  
    fToC(Fdegree) {
    return (Math.floor((Fdegree - 32) / 1.8))
}
  constructor() { }
}
