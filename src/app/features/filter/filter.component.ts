import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterElementComponent} from "../../components/filter-element/filter-element.component";
import {ButtonComponent} from "../../components/button/button.component";
import {Router, RouterLink} from "@angular/router";
import {FiltersService} from "../../services/filters.service";
import {Filter, FilterType} from "../../utils/filters.interface";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterElementComponent, ButtonComponent, RouterLink],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  filters: Filter[] = []
  previousFilters: Filter[] = []
  filterName: string
  filterType: FilterType

  constructor(private _router: Router, private _filtersService: FiltersService, private _cdr: ChangeDetectorRef) {
    effect(() => {
      switch (this._router.url) {
        case '/languages':
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
      this.previousFilters = JSON.parse(JSON.stringify(this.filters))
      this._cdr.detectChanges()
    })
  }

  ngOnInit() {
    this.filterType = this._router.url.replace('/', '') as FilterType
  }

  get selectedFilters() {
    return this.filters.filter(filter => filter.selected).length
  }

  private _navigateToFilters() {
    this._router.navigateByUrl('/')
  }

  save() {
    this._filtersService.addData(this.filterType, this.filters)
    this._navigateToFilters()
  }

  cancel() {
    if (!this.selectedFilters && JSON.stringify(this.previousFilters) === JSON.stringify(this.filters)) {
      this._filtersService.removeFilter(this.filterType)
    } else {
      this._filtersService.addData(this.filterType, this.previousFilters)
    }
    this._navigateToFilters()
  }
}
