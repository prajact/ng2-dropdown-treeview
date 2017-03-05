import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownTreeviewModule, DropdownTreeviewService } from 'ng2-dropdown-treeview';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        DropdownTreeviewModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private service: DropdownTreeviewService
    ) {
        this.service.addLanguageResource('vi', {
            allText: 'Tất cả',
            headerText: 'Tất cả',
            noSelectText: 'Chọn',
            moreSelectText: ' đã được chọn'
        });
        //this.service.switchLanguage('vi');
    }
}
