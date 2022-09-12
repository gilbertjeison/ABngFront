import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularABApp';

  userForm = this.formBuilder.group({
    name: '',
    number: 0
  });

  constructor(private formBuilder: FormBuilder,
    private generalService: GeneralService){

  }
  ngOnInit(): void {

  }

  convertNumber(){
    this.generalService.postNumberConversionResult(this.userForm.value).subscribe(
      result =>{
        console.log(result);
        alert(result);
    });
  }


}
