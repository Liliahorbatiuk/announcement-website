import { Pipe, PipeTransform } from '@angular/core';
import { IBlog } from '../interfaces/blog.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IBlog>, field: string): Array<IBlog> {
    if (!field) {
      return value
    }
    if (!value){
      return []
    }
    return value.filter(blog => blog.title.toLocaleLowerCase().includes(field.toLocaleLowerCase()));
  }

}
