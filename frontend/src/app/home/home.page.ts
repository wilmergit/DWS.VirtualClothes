import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClothingService } from '../services/clothing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  clothingForm: FormGroup;

  constructor(
    private route: Router,
    private clothingService: ClothingService,
    public formBuilder: FormBuilder
  ) {
    this.clothingForm = this.formBuilder.group({
      description: ['', Validators.compose([Validators.required])],
      brand: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  createClothing() {
    if (this.clothingForm.valid) {
      console.log('Valid Form: ', this.clothingForm.value);
      this.clothingService
        .create(this.clothingForm.value)
        .subscribe((response) => {
          this.route.navigateByUrl('/my-clothing');
        });
    } else {
      console.log('Not Valid Form');
    }
  }

  getFormControl(field: string) {
    return this.clothingForm.get(field);
  }

  gotoClothing() {
    this.route.navigateByUrl('/my-clothing');
  }
}
