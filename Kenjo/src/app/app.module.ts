import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
////////////// Internal Routing /////////////////////////
import { AppRoutingModule } from "./app-routing.module";

////////////// APP //////////////////////////////////////
import { AppComponent } from "./app.component";
////////////// CREW AREA /////////////////////////////////
import { DefaultModule } from "./layouts/home/default.module";
////////////// LAND AREA /////////////////////////////////
import { LandingPageComponent } from "./landing page/landingpage.component";

/////////////// REDUX /////////////////////////////////////
// import { StoreModule } from "@ngrx/store";
// import { IAppState, rootReducer, INITIAL_STATE } from "./redux/store";
// import {
//   NgReduxModule,
//   NgRedux,
//   DevToolsExtension
// } from "@angular-redux/store";

@NgModule({
  declarations: [ AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   ngredux: NgRedux<IAppState>, devTools: DevToolsExtension) {
  //   const enhancers = [devTools.enhancer()];
  //   ngredux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  // }
}
