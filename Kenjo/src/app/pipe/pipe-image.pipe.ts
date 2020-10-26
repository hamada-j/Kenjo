import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorImage'
})
export class PipeImagePipe implements PipeTransform {

  // validates images before display them in view
  transform(images: string): string {

    if ( /\.(jpe?g|png|gif|bmp|jpg)$/i.test(images) ) {
      return images;
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
