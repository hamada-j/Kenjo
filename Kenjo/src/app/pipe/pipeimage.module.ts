import { NgModule } from '@angular/core';

// Pipes
import { ErrorImagePipe } from './pipeimage.pipe';

@NgModule({
  imports: [],
  declarations: [
        ErrorImagePipe
    ],
  exports: [
        ErrorImagePipe
    ]
})
export class PipesModule { }
