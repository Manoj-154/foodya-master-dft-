import { Component, OnInit } from '@angular/core';
import {FoodserviceService} from '../foodservice.service'
import { Items } from '../items';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: Items[] = []
  constructor(private fs:FoodserviceService) { }

  ngOnInit(): void {
    this.orderItems = this.fs.getOrders()
    // console.log(this.orderItems)
  }

}
