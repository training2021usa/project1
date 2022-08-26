import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  msg:string='';
  enteredValue='';
  authMessage='';
  uname="";
  pass="";

public welcome():void{
this.msg='hii';

}

public clearMsg():void{
  this.msg='';

}

public showEnteredData():void{

this.enteredValue=this.uname;
}

public authenticate():void{

  if(this.uname=='sanjay'&& this.pass=='test'){
   this.authMessage='welecome'+" "+this.uname;

  }
  else{
    this.authMessage="plz try again";

  }


}



}
