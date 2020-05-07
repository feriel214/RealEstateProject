import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files) => {
  if (files.length === 0) {
    return;
  }
 
  let filesToUpload : File[] = files;
  const formData = new FormData();
    
  Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);
  });
 
  this.http.post('http://localhost:5000/api/upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}

}
