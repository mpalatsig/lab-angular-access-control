import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../../services/AccessControlLog.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLog]
})
export class LogFormComponent implements OnInit {

  constructor(public log:AccessControlLog) { } //llamo porque quiero crear una instancia del servicio

  ngOnInit() {
  }

  submitForm(myForm) {
    this.log.addAccessItem(myForm.form._value.person, myForm.form._value.messaje)
  }
}