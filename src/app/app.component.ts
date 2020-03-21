import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessagesSendAngularService } from 'projects/messages-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messageForm;
  messageResult = {};

  constructor(
    private formBuilder: FormBuilder,
    private sendService: MessagesSendAngularService
  ) {
    this.messageForm = this.formBuilder.group({
      to: '0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6',
      from: '0x92d8f10248c6a3953cc3692a894655ad05d61efb',
      subject: 'Quick Hi',
      body: 'Hi folks!',
      pubkey: '0x69d908510e355beb1d5bf2df8129e5b6401e1969891e8016a0b2300739bbb00687055e5924a2fd8dd35f069dc14d8147aa11c1f7e2f271573487e1beeb2be9d0' // pubkey of 0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6
    });
  }

  onSubmit(formData) {
    let outboundMail = this.sendService.initOutboundMail()

    const protocol = "ethereum"
    const network = "ropsten"

    outboundMail.message["headers"]["from"] = formData.from
    outboundMail.message["headers"]["reply-to"] = formData.from
    outboundMail.message["headers"]["to"] = formData.to
    outboundMail.message["public-key"] = formData.pubkey
    outboundMail.message["subject"] = formData.subject
    outboundMail.message["body"] = formData.body
    // Process message data here
    this.sendService.sendMail(outboundMail, protocol, network).subscribe(res => {
      this.messageResult = {
        status: res['status'],
        statusText: res['statusText']
      }
    },
      err => {
        this.messageResult = err['error']
      })

    this.messageForm.reset();
  }
}
