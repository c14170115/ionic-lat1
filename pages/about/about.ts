import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { GlobalService } from "../../app/global.service";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  data: any;
  constructor(public gv: GlobalService) {
    //this.data = gv.data;
    this.refill();
  }

  refill() {
    this.data = [];
    for (var i = 0; i < this.gv.data.length; i++) {
      if (this.gv.favorited.includes(i)) {
        this.gv.data[i].favorited = 1;
      } else {
        this.gv.data[i].favorited = 0;
      }
      this.data.push(this.gv.data[i]);
    }
  }

  favorite(idx) {
    alert(this.data[idx].judul + " telah difavoritkan");
    this.gv.favorited.push(idx);
    this.refill();
    //console.log("favorite " + idx);
  }
}
