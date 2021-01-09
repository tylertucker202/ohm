import { GetDssImgService } from './../get-dss-img.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-target',
  template: `
  <img [src]="imageToShow"
      alt="Place image title"
      *ngIf="!isImageLoading; else noImageFound">
  <ng-template #noImageFound>
      <img src="fallbackImage.png" alt="Fallbackimage">
  </ng-template>

  `,
  styles: [
  ]
})
export class ViewTargetComponent implements OnInit {

  constructor(public dssService: GetDssImgService ) { }

  private TEST_URL = "https://archive.stsci.edu/cgi-bin/dss_search?v=poss2ukstu_red&r=00+42+44.35&d=%2B41+16+08.6&e=J2000&h=15.0&w=15.0&f=gif&c=none&fov=NONE&v3="
  public imageToShow: string | ArrayBuffer;
  public isImageLoading: boolean;

  ngOnInit(): void {

    this.getImageFromService()
  }

  getImageFromService() {
    this.isImageLoading = true
    this.dssService.get_dss_img(this.TEST_URL).subscribe( (imgBlob: Blob) => {
      this.createImageFromBlob(imgBlob)
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error)
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
    }, false);
   if (image) {
      reader.readAsDataURL(image);
   }
  }
}
