import { Component, HostListener, Input } from '@angular/core';
import { EventType } from '@angular/router';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  
  constructor() {}


  onChange(event: any) {
    
    console.log(event);

   const selectedFiles = <FileList> event.srcElement.files;
   
   (<HTMLInputElement>document.getElementById("custom-file-span")).innerHTML = selectedFiles[0].name;
  }
  

 
}
