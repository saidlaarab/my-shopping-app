import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORIES } from '../../assets/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:string[] = CATEGORIES;
  @Input() selectedCategory:string="All Categories";
  @Output() selectedCategoryChange = new EventEmitter<string>();

  selectCategory(category:string){
    this.selectedCategory = category;
    this.selectedCategoryChange.emit(this.selectedCategory);
  }

}
