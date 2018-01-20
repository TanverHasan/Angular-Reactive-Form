import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "app-my-reactive-form",
  templateUrl: "./my-reactive-form.component.html",
  styleUrls: ["./my-reactive-form.component.css"]
})
export class MyReactiveFormComponent implements OnInit {
  customerForm: FormGroup;

  get mobiles() {
    return this.customerForm.get("mobiles") as FormArray;
  }
  constructor(public fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      mobiles: this.fb.array([this.buildNumber()])
    });

    this.data.getCustomer().subscribe(res => {
      console.log(res[0]);
      this.customerForm.patchValue({
        firstName: res[0].firstName,
        lastName: res[0].lastName
      });

      for (let index = 0; index < res[0].mobile.length; index++) {
        this.mobiles.controls.push(this.buildNumber());
        this.mobiles.at(index).patchValue({
          number: res[0].mobile[index].number,
        });
      }
      this.mobiles.controls.pop();
    });
  }

  private buildNumber() {
    return this.fb.group({
      number: [""]
    });
  }

  private addMobile() {
    this.mobiles.push(this.buildNumber());
  }
  private removeMobile(index: number) {
    this.mobiles.controls.splice(index);
  }

  save() {
    console.log(this.customerForm.value);
  }
}
