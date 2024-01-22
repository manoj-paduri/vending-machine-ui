import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringFunctionsService {

  public lowerCase(str: string): string {
    return str?.toLowerCase();
  }

  public upperCase(str: string): string {
    return str?.toUpperCase();
  }

  public docTypeSentenceCase(str: string): string {
    if (str?.length > 2) {

      var splitStr = str.toLowerCase().split('_');
      splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);

      return splitStr.join(' ');
    } else {
      return str;
    }
  }
}
