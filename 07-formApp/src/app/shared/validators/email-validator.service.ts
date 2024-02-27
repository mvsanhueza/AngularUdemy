import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

      const httpCallObservable = new Observable<ValidationErrors | null>((subscriber)=>{
        if(email === 'fernando@google.com'){
          subscriber.next({emailTaken:true})
          subscriber.complete();
          // return;
        }

        subscriber.next(null);
        subscriber.complete();
    });

    return httpCallObservable;
    // return this.http.get<string>(`https://miservicio.com/users?q=${email}`).pipe(
    //   map(res => {
    //     return (resp.length === 0) ? null : {emailTaken:true}
    //   })
    // )
  }

}
