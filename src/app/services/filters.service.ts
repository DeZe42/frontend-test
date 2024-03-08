import {computed, Injectable, signal} from "@angular/core";
import {Filter} from "../utils/filters.interface";

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  #languages = signal<Filter[]>(JSON.parse(JSON.stringify(languages)))
  languages = computed(this.#languages)
  #authors = signal<Filter[]>(JSON.parse(JSON.stringify(authors)))
  authors = computed(this.#authors)
  #statuses = signal<Filter[]>(JSON.parse(JSON.stringify(statuses)))
  statuses = computed(this.#statuses)

  constructor() {
  }

  addLanguages(selectedLanguages: Filter[]) {
    this.#authors.update(() => selectedLanguages)
  }

  addAuthors(selectedAuthors: Filter[]) {
    this.#authors.update(() => selectedAuthors)
  }

  addStatuses(selectedStatuses: Filter[]) {
    this.#authors.update(() => selectedStatuses)
  }

  removeFilters() {
    this.#languages.update(() => JSON.parse(JSON.stringify(languages)))
    this.#authors.update(() => JSON.parse(JSON.stringify(authors)))
    this.#statuses.update(() => JSON.parse(JSON.stringify(statuses)))
  }
}

export const languages = [
  { id: 0, imgAlt: 'flag_img', imgSrc: '/assets/images/img_5.png', name: 'Magyar', selected: false },
  { id: 1, imgAlt: 'flag_img', imgSrc: '/assets/images/img_2.png', name: 'Angol', selected: false }
]

export const authors = [
  { id: 0, imgAlt: 'profile_img', imgSrc: '/assets/images/img_5.png', name: 'Indigo Violet', selected: false },
  { id: 1, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Eleanor Fant', selected: false },
  { id: 2, imgAlt: 'profile_img', imgSrc: '/assets/images/img_4.png', name: 'Jarvis Pepperspray', selected: false },
  { id: 3, imgAlt: 'profile_img', imgSrc: '/assets/images/img_3.png', name: 'Lance Bogrol', selected: false },
  { id: 4, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Linguina Nettlewater', selected: false },
  { id: 5, imgAlt: 'profile_img', imgSrc: '/assets/images/img_1.png', name: 'Norman Gordon', selected: false },
  { id: 6, imgAlt: 'profile_img', imgSrc: '/assets/images/img_5.png', name: 'Indigo Violet', selected: false },
  { id: 7, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Eleanor Fant', selected: false },
  { id: 8, imgAlt: 'profile_img', imgSrc: '/assets/images/img_4.png', name: 'Jarvis Pepperspray', selected: false },
  { id: 9, imgAlt: 'profile_img', imgSrc: '/assets/images/img_3.png', name: 'Lance Bogrol', selected: false },
  { id: 10, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Linguina Nettlewater', selected: false },
  { id: 11, imgAlt: 'profile_img', imgSrc: '/assets/images/img_1.png', name: 'Norman Gordon', selected: false },
  { id: 12, imgAlt: 'profile_img', imgSrc: '/assets/images/img_5.png', name: 'Indigo Violet', selected: false },
  { id: 13, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Eleanor Fant', selected: false },
  { id: 14, imgAlt: 'profile_img', imgSrc: '/assets/images/img_4.png', name: 'Jarvis Pepperspray', selected: false },
  { id: 15, imgAlt: 'profile_img', imgSrc: '/assets/images/img_3.png', name: 'Lance Bogrol', selected: false },
  { id: 16, imgAlt: 'profile_img', imgSrc: '/assets/images/img_2.png', name: 'Linguina Nettlewater', selected: false },
  { id: 17, imgAlt: 'profile_img', imgSrc: '/assets/images/img_1.png', name: 'Norman Gordon', selected: false },
]

export const statuses = [
  { id: 0, imgAlt: 'status_img', imgSrc: '/assets/images/green_dot.png', name: 'Elérhető', selected: false },
  { id: 1, imgAlt: 'status_img', imgSrc: '/assets/images/red_dot.png', name: 'Elfoglalt', selected: false }
]
