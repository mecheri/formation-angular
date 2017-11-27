
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './demo.component.html',
})
export class HeroListComponent implements OnInit {
    list: any[];
    selectedDemo: any;
  
    constructor() { }
  
    ngOnInit() {
      this.list = [
          {
              code : "A",
              label : "Demo A" 
          },
          {
            code : "B",
            label : "Demo B" 
        }
      ];
    }
  
    selectDemo(demo: any) { this.selectedDemo = demo; }
  }