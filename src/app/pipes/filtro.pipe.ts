import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(myArray: any[], text: string, column: string): any[] {

    if (text === '' || text === undefined) {
      return myArray;
    }

    text = text.toLowerCase();
    console.log('texto: ', text);
    console.log('column: ', column);

    return myArray.filter( item => {
      return item[column].toLowerCase().includes(text);
    });

  }

}
