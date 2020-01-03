import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(!args)
    {
      return value
    }
    return value.filter((val)=>{
      var a=val.name.toLocaleLowerCase();
      var b=val.name.toUpperCase();
      return (a.toLocaleLowerCase().includes(args)||b.toUpperCase().includes(args))
    })
  }
  
}
