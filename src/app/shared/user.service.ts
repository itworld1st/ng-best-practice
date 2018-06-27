import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.url).pipe(
      map(users => {
        const newUsers = [];
        for (let user of users) {
          const email = user.email;
          const uName = user.username;
          newUsers.push({ email: email, username: uName });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    );
  }

  getUserByEmail(email: string) {
    return this.http.get<any[]>(`${this.url}?email=${email}`);
  }

  getUserByUsername(uName: string) {
    // return this.http.get<any[]>(`${this.url}?username=${uName}`);

    // or using HttpParams

    return this.http.get<any[]>(this.url, {
      params: new HttpParams().set('username', uName)
    });
  }

}
