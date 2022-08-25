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

public welcome():void{
this.msg='hii';

}

public clearMsg():void{
  this.msg='';

}

public showEnteredData(uname:string):void{

this.enteredValue=uname;
}



}
