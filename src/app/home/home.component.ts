import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../popular-categories-items'
import {FoodserviceService} from '../foodservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names: "Briyani"
    },
    {
      imgUrl:"",
      names: "Fried Rice"
    },
    {
      imgUrl:"",
      names: "Pizza"
    },
    {
      imgUrl:"",
      names: "Noodles"
    }
  ]

  stars=[
    {
      starImg:""
    }
  ]
  constructor(private fs : FoodserviceService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
  }

  add(item:any){
    this.fs.orderedItem.push(item)
  }
}
