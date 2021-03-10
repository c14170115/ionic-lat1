import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  public nama: String = "";
  public data: any = [];
  public favorited: any = [];
  constructor() {}
}
