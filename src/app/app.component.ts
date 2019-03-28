import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {PhonebookApiService} from './phonebook-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'phonebook-api';
  button_status = false;
  uniqueId;
  validateForm: FormGroup;

  phoneBookList = [
    {
      id: '0',
    name: 'Tom',
    phone: '11445566'
  },
    {
      id: '1',
      name: 'Sam',
      phone: '22445566'
    },
    {
      id: '2',
      name: 'Law',
      phone: '8844112233'
    },
  ];
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.button_status) {
      this.phonebookService.updatePhoneBook(this.validateForm.value, this.uniqueId);
      this.message.create('success', `Phone book api successfully updated`);
      this.button_status = false;

    } else {
      this.phonebookService.insertPhoneBook(this.validateForm.value);
      this.message.create('success', `Phone book api successfully saved`);
    }
    this.validateForm.reset();
  }
  constructor(private fb: FormBuilder, private modalService: NzModalService, private phonebookService: PhonebookApiService, private message: NzMessageService) {}

  ngOnInit(): void {
    this.button_status = false;
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });
    this.phoneBookList = [];
    this.phonebookService.getPhoneBooks();

    this.phonebookService.userRecord.subscribe((records) => {
      this.phoneBookList =  records;
    });
  }

  onDelete(id: string) {
    this.modalService.confirm({
      nzTitle: '<i>Do you Want to delete these phone book - api ?</i>',
      nzOnOk: () => {
        this.phonebookService.deleteSinglePhoneBook(id);
        this.message.create('success', `Phone book api successfully deleted`);
      }
    });
  }

  onUpdate(data: any) {
    this.validateForm.patchValue({
      name: data.name,
      phone: data.phone
    });
    this.uniqueId = data.id;
    this.button_status = true;
  }
}
