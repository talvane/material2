import {Component} from '@angular/core';
import {MdPlatform, getSupportedInputTypes} from '@angular/material';


@Component({
  moduleId: module.id,
  selector: 'platform-demo',
  templateUrl: 'platform-demo.html',
})
export class PlatformDemo {
  supportedInputTypes = getSupportedInputTypes();

  constructor(public platform: MdPlatform) {}
}
