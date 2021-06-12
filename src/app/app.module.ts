import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { NgZorroAntdModule } from './ng-zorro-antd.module';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as AllIcons from '@ant-design/icons-angular/icons';
import { CardOneComponent } from './components/cards-one/card-one/card-one.component';
import { CardTwoComponent } from './components/cards-two/card-two/card-two.component';
import { CardThreeComponent } from './components/cards-three/card-three/card-three.component';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import {OverlayPanelModule} from 'primeng/overlaypanel';
// import { LayoutDefaultModule } from '@delon/theme/layout-default';
// import { HomeModule } from './pages/home/home.module';
// import { ProductsModule } from './pages/products/products.module';
// import { HomeComponent } from './pages/home/home.component';
// import { ProductsComponent } from './pages/products/products.component';

// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    BlogCardsComponent
  
    // HomeComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // OverlayPanelModule,
    // DragDropModule,
    // ScrollingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // LayoutDefaultModule,
    // HomeModule,
    // ProductsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
