import { Component, OnInit, Output, Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-data-umum-nasabah',
  templateUrl: './edit-data-umum-nasabah.component.html',
  styleUrls: ['./edit-data-umum-nasabah.component.css']
})
export class EditDataUmumNasabahComponent implements OnInit {

  //terima data dari parent component
  @Input() editData;
  //kirim data ke parent component
  @Output() editDataEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  funcKembali(){
    this.editData = true;
    this.editDataEvent.emit(this.editData);
  }
}
