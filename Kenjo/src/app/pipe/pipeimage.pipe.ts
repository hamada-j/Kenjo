import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorImage'
})

export class ErrorImagePipe implements PipeTransform {

  transform(images: string): string {
    return images;
  // const regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
  // if (!images) {
  //     return '../../assets/img/no-image.png';
  //   }
  // if (regex.test(images)) {
  //     return images;
  //   } else {
  //     return '../../assets/img/no-image.png';
  //   }
  }

}
