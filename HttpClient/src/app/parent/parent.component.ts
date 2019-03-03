import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';
import{FormGroup,Validators,FormBuilder} from '@angular/forms'
import { Observable } from 'rxjs';
import { IBiodatas } from '../biodatas';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 public value1=[];
 public datasaved=false;
 public bookForm:FormGroup;
 allEmploye:Observable<IBiodatas[]>
 public value;

  constructor(private formbuilder:FormBuilder, private datservice:SendDataService) { }

  ngOnInit() {
    this.bookForm=this.formbuilder.group({
      name:['',[Validators.required]],
      surname:['',[Validators.required]]
    })
  //  this.value1= this.datservice.biodata();
// this.datservice.getEmployOervable().subscribe(data=>this.value1=data)  
 this.getsOfEmploye();
}
onFormsSubmit(){
  this.datasaved=false;
  let book=this.bookForm.value;
  this.createEmployes(book);
  this.bookForm.reset();
}
public createEmployes(book:IBiodatas){
  this.datservice.creatEmployeee(book).subscribe(
    
      data=>{ this.datasaved=true;
         console.log(this.datasaved);
      this.getsOfEmploye();
       } );
      }
  getsOfEmploye(){
  this.allEmploye=this.datservice.getEmployOervable();
  console.log("data is coming")

}
DeleteDetails(EmployeId:string){
  this.datservice.DeletMeth(EmployeId).subscribe(book=>this.getsOfEmploye())
}

}
