import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {Observable, map} from 'rxjs'
import {AuthReponseInterface} from '../types/authResponse.interface'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url: string = environment.apiUrl + '/users'
    return this.http
      .post<AuthReponseInterface>(url, data)
      .pipe(map((response) => response.user))
  }
}
