import { Component } from '@angular/core';
import { Auth } from './auth.model';



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
  showTable:boolean=false;
  time:Date=new Date();
  status:string='';
  showHistoryBtn:String='showHistory';
 // List<Auth> listOfAuth= new ArrayList();

  listOfAuth:Auth[]=[];

public welcome():void{
this.msg='hii';

}

public clearMsg():void{
  this.msg='';
 this.enteredValue='';
 this.uname='';
 this.pass='';

}

public showEnteredData():void{

this.enteredValue=this.uname;
}

public authenticate():void{
  
  if(this.uname=='sanjay'&& this.pass=='test'){
   this.authMessage='welecome'+" "+this.uname;
   let auth=new Auth(this.uname,this.pass,new Date(),"succes");
   this.listOfAuth.push(auth);

  }
  else{
    this.authMessage="plz try again";
    let auth=new Auth(this.uname,this.pass,new Date(),"failed");
   this.listOfAuth.push(auth);

  }
}
public showHistory():void{
  if(this.showHistoryBtn=='showHistory'){
    this.showTable=!this.showTable;
    this.  showHistoryBtn='HideHistory';

  }
  else{
  this.showTable=!this.showTable;
  this.  showHistoryBtn='showHistory';
  }
  

}



}
