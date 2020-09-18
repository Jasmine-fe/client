import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './createPage.component.html',
  styleUrls: ['./createPage.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(public fb: FormBuilder,
    public providerService: ProviderService) {}

  gameForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    descp: new FormControl(''),
  });

  configForm: FormGroup = new FormGroup({
    core: new FormControl(''),
    resolution: new FormControl('')
  });

  mode = "create"; // create, setting
  showImg: any;
  fd = new FormData();

  ngOnInit() {
  }

  goNextStep() {
    this.mode = "setting"
  }

  displayImage(img, file) {
    return new Promise((resolve, rejfect) => {
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve(img);
      };
    });
  }

  uploadImage(event) {
    let imgDOM = document.getElementById('upload-img');
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.displayImage(imgDOM, file)
      this.fd.append('image', file, 'test.png');
    }
  }

  createNewGame(){
    const payload = this.gameForm.value;
    this.providerService.createNewGame(payload)
    .subscribe((res) => {
      const payload = {
        formData: this.fd,
        gameName: this.gameForm.value.name 
      }
      this.providerService.uploadImg(payload)
        .subscribe((res) => {
          console.log("successful uplaod File ")
        })
    })
  }

}
