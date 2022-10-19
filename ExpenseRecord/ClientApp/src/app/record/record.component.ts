import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  record!: string;
  feedback!: string;
  records!: string[];

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.records = new Array(0);  
  }

  ngOnInit(): void {
  }

  add() {
    this.records.reverse();
    this.records.push(this.record);
    this.records.reverse();
    this.callApi(this.record);
  }

  delete(recordToDel: string) {
    this.records.splice(this.record.indexOf(recordToDel),1);
  }

  callApi(record: string) {
    this.http.get<string>(this.baseUrl + 'record?record=' + record, { responseType: 'text' as 'json' })
      .subscribe((result: string) => {
        this.feedback = result;
      }, (error: any) => console.error(error));
  }


}
