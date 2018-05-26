import { Component } from '@angular/core';

@Component({
  selector: 'fids-dashboard',
  templateUrl: './fids-dashboard.component.html',
  styleUrls: ['./fids-dashboard.component.css']
})
export class FidsDashboardComponent {
  cards = [
    { title: 'Card 1', content:'<p>TEST</p>', cols: 2, rows: 1 },
    { title: 'Card 2', content:'<h1>Testing</h1>',  cols: 1, rows: 1 },
    { title: 'Card 3', content:'<div>In a div</div>',  cols: 1, rows: 2 },
    { title: 'Card 4', content:`<ul><li>312312312</li><li>rewer</li><li>345345</li><li>345frewe</li></ul>`,  cols: 1, rows: 1 }
  ];
}
