import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FiltersService} from "../../services/filters.service";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../../components/button/button.component";
import {Filter, Filters} from "../../utils/filters.interface";

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {

  filters: Filters[] = []

  constructor(private _filtersService: FiltersService, private _cdr: ChangeDetectorRef) {
    effect(() => {
      this.filters = [
        { name: 'Nyelv', type: 'languages', data: this._filtersService.languages() },
        { name: 'Szerző', type: 'authors', data: this._filtersService.authors() },
        { name: 'Státusz', type: 'statuses', data: this._filtersService.statuses() },
      ]
      this._cdr.detectChanges()
    })
  }

  getSelectedFilter(filterType: string) {
    return this.filters.filter(filter => filter.type === filterType)[0].data.filter(filterElement => filterElement.selected)
  }

  deleteFilters() {
    this._filtersService.removeFilters()
  }
}
