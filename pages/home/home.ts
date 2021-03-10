import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { GlobalService } from "../../app/global.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  nama: String = "";
  judul: String = "";
  isi: String = "";
  tanggal: String = "";
  constructor(public navCtrl: NavController, public gv: GlobalService) {}
  simpan() {
    let ob: any = {};
    ob.nama = this.nama;
    ob.judul = this.judul;
    ob.isi = this.isi;
    ob.tanggal = this.tanggal;
    this.gv.data.push(ob);
    alert("Tersimpan");

    this.isi = "";
    this.judul = "";
    this.tanggal = "";
    //this.router.navigateByUrl("/halaman2");
  }
}
