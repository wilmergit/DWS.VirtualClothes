import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../services/clothing.service';

@Component({
  selector: 'app-my-clothing',
  templateUrl: './my-clothing.page.html',
  styleUrls: ['./my-clothing.page.scss'],
})
export class MyClothingPage implements OnInit {
  clothing: any = [];

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.getAllClothing();
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
