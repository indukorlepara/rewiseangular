import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ProductDiscountDirective } from './product-discount.directive';
import { CreatepipeComponent } from './createpipe/createpipe.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ParentComponent,
    ChildComponent,
    DirectiveComponent,
    ProductDiscountDirective,
    CreatepipeComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
