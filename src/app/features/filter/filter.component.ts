import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterElementComponent} from "../../components/filter-element/filter-element.component";
import {ButtonComponent} from "../../components/button/button.component";
import {Router, RouterLink} from "@angular/router";
import {FiltersService} from "../../services/filters.service";
import {Filter} from "../../utils/filters.interface";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterElementComponent, ButtonComponent, RouterLink],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filters: Filter[] = []
  filterName: string

  constructor(private _router: Router, private _filtersService: FiltersService, private _cdr: ChangeDetectorRef) {
    effect(() => {
      switch (this._router.url) {
        case '/languages':
          console.log('asd')
          this.filterName = 'Nyelv'
          this.filters = this._filtersService.languages()
          break
        case '/authors':
          this.filterName = 'Szerző'
          this.filters = this._filtersService.authors()
          break
        case '/statuses':
          this.filterName = 'Státusz'
          this.filters = this._filtersService.statuses()
          break
      }
      this._cdr.detectChanges()
    })
  }

  get selectedFilters() {
    return this.filters.filter(filter => filter.selected).length
  }

  navigateToFilter() {
    this._router.navigate([''])
  }

  save() {
    switch (this._router.url) {
      case 'language':
        this.filterName = 'Nyelv'
        this._filtersService.addLanguages(this.filters)
        break
      case 'author':
        this.filterName = 'Szerző'
        this._filtersService.addAuthors(this.filters)
        break
      case 'status':
        this.filterName = 'Státusz'
        this._filtersService.addStatuses(this.filters)
        break
    }
    this.navigateToFilter()
  }
}
