import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { StepsModule } from 'primeng/steps';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {AccordionModule} from 'primeng/accordion';
import {TreeTableModule} from 'primeng/treetable';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import { RippleModule } from "primeng/ripple";
import { MessageService } from "primeng/api"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Dialog} from 'primeng/dialog'

@NgModule({
    exports: [  
        InputTextModule,
        BrowserAnimationsModule,
        DialogModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        TableModule,
        MessageModule,
        CardModule,
        ChartModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule,
        SidebarModule,
        DynamicDialogModule,
        InputTextareaModule,
        MessagesModule,
        StepsModule,
        SplitButtonModule,
        FieldsetModule,
        DropdownModule,
        CodeHighlighterModule,
        TabViewModule,
        CheckboxModule,
        FileUploadModule,
        InputMaskModule,
        InputNumberModule,
        MultiSelectModule,
        RadioButtonModule,
        ConfirmDialogModule,
        AccordionModule,
        TreeTableModule,
        TreeModule,
        PasswordModule,
        RippleModule,
        
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
})
export class NgPrimeModule { }
