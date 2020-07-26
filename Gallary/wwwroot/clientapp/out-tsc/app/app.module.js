var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdventureTimeService } from './services/adventure-time.service';
import { TableRowIncorrectComponent } from './table-row-incorrect/table-row-incorrect.component';
import { FileuploadComponent } from './file-upload/file-upload.component';
import { SearchWordComponent } from './search-word/search-word.component';
import { HomeComponent } from './home/home.component';
import { NguiInViewComponent } from './ngui-in-view/ngui-in-view.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PreviewComponent } from './preview/preview.component';
import { ShareComponent } from './share/share.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                TableComponent,
                TableRowComponent,
                TableRowIncorrectComponent,
                FileuploadComponent,
                SearchWordComponent,
                HomeComponent,
                NguiInViewComponent,
                VideoplayerComponent,
                PreviewComponent,
                ShareComponent,
                NavMenuComponent,
                ProfileComponent,
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                FormsModule, ReactiveFormsModule,
                RouterModule.forRoot([{
                        path: 'mysite/:id', component: AppComponent
                    },
                ]),
            ],
            providers: [AdventureTimeService, AuthService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map