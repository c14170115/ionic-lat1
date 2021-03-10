import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { GlobalService } from "../../app/global.service";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  data: any;
  constructor(public gv: GlobalService) {
    //this.data = gv.data;
    this.refill();
  }

  refill() {
    this.data = [];
    for (var i = 0; i < this.gv.data.length; i++) {
      if (this.gv.favorited.includes(i)) {
        this.data.push(this.gv.data[i]);
      }
    }
  }
}
