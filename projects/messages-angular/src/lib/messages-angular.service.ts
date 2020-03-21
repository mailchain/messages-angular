import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutboundMail } from '../models/outbound-mail';
import { HttpHelpersAngularService } from '@mailchain/http-helpers-angular';

@Injectable({
  providedIn: 'root'
})
// export class MessagesAngularService {

//   constructor() { }
// }

export class MessagesSendAngularService {
  private url: string

  constructor(
    private http: HttpClient,
    private httpHelpersService: HttpHelpersAngularService,
  ) {
    this.initUrl()
  }

  /**
   * Initialize URL from local storage
   */
  initUrl() {
    this.url = `http://127.0.0.1:8080/api`
  }

  /**
 * Sends a mail via the api
 * @param outboundMail an outbound mail object
 * @param network the network to send to (e.g. ropsten, mainnet etc.)
 */
  sendMail(outboundMail: OutboundMail, protocol: string, network: string) {

    var url = `${this.url}/messages`
    var body = outboundMail
    var httpOptions = this.httpHelpersService.getHttpOptions([
      ['protocol', protocol],
      ['network', network]
    ])

    return this.http.post(url, body, httpOptions);
  }

  /**
   * Returns and outbound mail
   */
  initOutboundMail() {
    return new OutboundMail
  }

}
