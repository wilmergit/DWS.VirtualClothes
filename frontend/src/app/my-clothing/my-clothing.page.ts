import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../services/clothing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-clothing',
  templateUrl: './my-clothing.page.html',
  styleUrls: ['./my-clothing.page.scss'],
})
export class MyClothingPage implements OnInit {
  clothing: any = [];

  constructor(
    private clothingService: ClothingService,
    private router: Router
  ) {}
  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllClothing();
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
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
