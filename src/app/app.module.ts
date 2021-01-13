import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TargetsComponent } from './targets/targets.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { SequencesComponent } from './sequences/sequences.component';
import { ObservingBlocksComponent } from './observing-blocks/observing-blocks.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TargetDefinitionComponent } from './targets/target-definition/target-definition.component';
import { TargetAcquisitionComponent } from './targets/target-acquisition/target-acquisition.component';
import { TargetTypeComponent } from './targets/target-type/target-type.component';
import { ViewTargetComponent } from './targets/view-target/view-target.component';
import { TableTargetComponent } from './targets/table-target/table-target.component'
import { FormsModule } from '@angular/forms';
import { DialogBoxComponent } from './targets/dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TargetsComponent,
    ConfigurationsComponent,
    SequencesComponent,
    ObservingBlocksComponent,
    TargetDefinitionComponent,
    TargetAcquisitionComponent,
    TargetTypeComponent,
    ViewTargetComponent,
    TableTargetComponent,
    DialogBoxComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
