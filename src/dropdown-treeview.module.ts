import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownTreeviewComponent } from './dropdown-treeview.component';
import { DropdownTreeviewService } from './dropdown-treeview.service';
import { TreeviewComponent } from './treeview.component';
import { TreeviewPipe } from './treeview.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        DropdownTreeviewComponent,
        TreeviewComponent,
        TreeviewPipe
    ], exports: [
        DropdownTreeviewComponent,
        TreeviewComponent,
        TreeviewPipe
    ], providers: [
        DropdownTreeviewService
    ]
})
export class DropdownTreeviewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DropdownTreeviewModule
        };
    }
}
