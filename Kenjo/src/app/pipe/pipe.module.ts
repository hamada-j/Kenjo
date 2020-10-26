import { NgModule } from '@angular/core';

import { PipeImagePipe } from './pipe-image.pipe';


@NgModule({
  imports: [],
  declarations: [
        PipeImagePipe,
    ],
  exports: [
        PipeImagePipe,
    ]
})
export class PipesModule { }
