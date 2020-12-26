import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatTreeModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatExpansionModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatStepperModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule {
}
