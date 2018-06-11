import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  public execute(event) {
    const file = event.target.files[0];
    this.getBase64(file).then((data: string) => {
      this.addFont(data.replace('data:;', ''));
      console.log(data);
    });
  }
    
  private addFont(base64Font) {
    const cssContent = `@font-face {
      font-family: "Uploaded Font";
      src: url(data:font/truetype;charset=utf-8;` + base64Font +`) format("truetype");
      font-weight: normal;
      font-style: normal;
    }`;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssContent));
    
    head.appendChild(style);
    
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
