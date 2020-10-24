import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
///// FlexLayaut /////
import { FlexLayoutModule } from "@angular/flex-layout";
///// Angular Material /////
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
///// Highcharts Chart /////
import { HighchartsChartModule } from "highcharts-angular";
///// Component /////
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";


///// environmentDEV /////
import { environment } from "src/environments/environment";
///// FireBase and Google Map /////
import { AgmCoreModule } from "@agm/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ],
})
export class SharedModule {}
