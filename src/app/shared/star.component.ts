import { Component,  Input , Output ,EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }
}
