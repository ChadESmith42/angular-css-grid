import { Component, OnInit } from '@angular/core';
import { PageContent, AdjustableContent } from './adjustable-content';

@Component({
  selector: 'app-adjustable',
  templateUrl: './alt-adjustable.component.html',
  styleUrls: ['./adjustable.component.scss']
})
export class AdjustableComponent implements OnInit {

  public content: AdjustableContent[];

  constructor() {
    this.content = PageContent;
   }

  ngOnInit() {
  }

}
