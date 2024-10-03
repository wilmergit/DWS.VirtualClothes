import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../services/clothing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-clothing',
  templateUrl: './my-clothing.page.html',
  styleUrls: ['./my-clothing.page.scss'],
})
export class MyClothingPage implements OnInit {
  clothing: any = [];
  clothingForm: FormGroup;

  constructor(
    private clothingService: ClothingService,
    public formBuilder: FormBuilder,
    private route: Router
  ) {
    this.clothingForm = this.formBuilder.group({
      description: ['', Validators.compose([Validators.required])],
      brand: ['', Validators.compose([Validators.required])],
      size: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getAllClothing();
  }

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

  getAllClothing() {
    this.clothingService.getClothing().subscribe((response) => {
      this.clothing = response;
    });
  }

  deleteClothing(id: any) {
    this.clothingService.delete(id).subscribe((response) => {
      this.getAllClothing();
    });
  }
}
