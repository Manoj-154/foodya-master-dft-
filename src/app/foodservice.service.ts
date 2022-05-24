import { Injectable } from '@angular/core';
import {Items} from './items'
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  orderedItem: Items[] = []
  getOrders():Items[]{
    return this.orderedItem
  }
}
