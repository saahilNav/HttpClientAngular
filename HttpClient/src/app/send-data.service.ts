import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBiodatas } from './biodatas';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
 bookUrl="/api/employesDetails";
  constructor(private http:HttpClient) { }

   getEmployOervable():Observable<IBiodatas[]>{
     return this.http.get<IBiodatas[]>(this.bookUrl);
   }

   creatEmployeee(employe:IBiodatas):Observable<IBiodatas>{
   let httpHeaders=new HttpHeaders().set('Content-Type','application/Json')
   let options={
     headers:httpHeaders
   };
   return this.http.post<IBiodatas>(this.bookUrl,employe,options);
   }
   DeletMeth(employeId:string):Observable<IBiodatas>{
    let httpHeaders=new HttpHeaders().set('Content-Type','application/Json')
    let options={
      headers:httpHeaders
    };
    return this.http.delete<IBiodatas>(this.bookUrl+"/"+employeId);
    }
  //  biodata():Observable<IBiodatas[]>{
  //    return this.http.get<IBiodatas[]>('https://jsonplaceholder.typicode.com/users');
  // // return [{ name:"sahil sharma",
  // //               age:'23', 
  // //               adress:'gurgaon',
  // //               profile:'web developer',
  // //                }];
  //              }
}
