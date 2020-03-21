# MessagesAngular

This package is an Angular service that helps interact with the Mailchain API.

## Installing

```sh
npm install @mailchain/messages-angular --save
```

## Usage

In your Angular `app.module.ts` file, import the `MessagesAngularModule`:

```ts

import { MessagesAngularModule } from '@mailchain/messages-angular';

@NgModule({
  declarations: [
    AppComponent
    ...
  ],
  imports: [
    ...
    MessagesAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In an Angular component file, eg. `my-component.component.ts`, add the following:

``` ts
  // import the specific service you need (see README > Services)
  import { MessagesSendAngularService } from '@mailchain/nameserver-angular';

  // add to constructor
  constructor(
    private sendService: MessagesSendAngularService,
  ) { }

  // add to function and then execute logic in the callback
  myFunction() {
    let outboundMail = this.sendService.initOutboundMail()

    const protocol = "ethereum" // change accordingly or use function params
    const network = "ropsten" // change accordingly or use function params

    outboundMail.message["headers"]["from"] = "0x123...98"
    outboundMail.message["headers"]["reply-to"] = "0x123...98"
    outboundMail.message["headers"]["to"] = "0x999...111"
    outboundMail.message["public-key"] = "0x5555...555"
    outboundMail.message["subject"] = "Your subject"
    outboundMail.message["body"] = "Your message body"

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

  }

```

### Services

This package includes multiple services that correspond to the Mailchain API structure.

#### MessagesSendAngularService

##### Methods

###### initOutboundMail()

Initializes an `OutboundMail` object with the attributes:

```ts
export class OutboundMail {
  public message: any = {
    "body": "",
    "headers": {
      "from": "",
      "reply-to": "",
      "to": ""
    },
    "public-key": "",
    "public-key-encoding": "hex/0x-prefix",
    "public-key-kind": "secp256k1",
    "subject": ""
  };
  public "envelope": string = "0x01";
  public "encryption-method-name": string = "aes256cbc";
  public "content-type": string = "text/plain; charset=\"UTF-8\"";
}
```

###### sendMail(outboundMail: OutboundMail, protocol: string, network: string)

Sends a message via the Mailchain api
@param `outboundMail` an outbound mail object (see initOutboundMail)
@param `protocol` is the protocol to use (e.g. "ethereum")
@param `network` is the network to send to (e.g. "ropsten", "mainnet" etc.)

---

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project messages-angular` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project messages-angular`.
> Note: Don't forget to add `--project messages-angular` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build messages-angular` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build messages-angular`, go to the dist folder `cd dist/messages-angular` and run `npm publish`.

## Running unit tests

Run `ng test messages-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
