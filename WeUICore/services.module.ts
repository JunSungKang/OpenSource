import {NgModule} from "@angular/core";
import {KendoComboBoxService} from './WeUICore/services/combobox/kendo.combobox.service';
import {KendoGridService} from './WeUICore/services/grid/kendo.grid.service';
import {JsonService} from './WeUICore/services/message/json.service';
import {KendoDatePickerService} from './WeUICore/services/datepicker/kendo.datepicker.service';
import {Ng2TreeviewService} from './WeUICore/services/treeview/ng2.treeview.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [KendoComboBoxService, KendoGridService, KendoDatePickerService,
    Ng2TreeviewService, JsonService]
})
export class ServicesModule{
  static forRoot(){
    return {
      ngModule: ServicesModule,
      imports: [],
      providers: [KendoComboBoxService, KendoGridService, KendoDatePickerService,
        Ng2TreeviewService, JsonService]
    }
  }
}

export {JsonService} from './WeUICore/services/message/json.service';
export {KendoComboBoxService} from './WeUICore/services/combobox/kendo.combobox.service';
export {KendoGridService} from './WeUICore/services/grid/kendo.grid.service';
export {KendoDatePickerService} from './WeUICore/services/datepicker/kendo.datepicker.service';
export {Ng2TreeviewService} from './WeUICore/services/treeview/ng2.treeview.service';
