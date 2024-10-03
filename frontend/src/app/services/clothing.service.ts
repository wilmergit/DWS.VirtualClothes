import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClothingService {
  endpoint = 'http://localhost:8080/api/clothing';

  constructor(private httpClient: HttpClient) {}

  getClothing() {
    return this.httpClient.get(this.endpoint);
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
