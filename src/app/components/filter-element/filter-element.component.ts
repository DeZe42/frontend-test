import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Filter} from "../../utils/filters.interface";

@Component({
  selector: 'app-filter-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-element.component.html',
  styleUrl: './filter-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterElementComponent {
  @Input({ required: true }) filterElement!: Filter
}
