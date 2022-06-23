import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DeveloperComponent } from './developer/developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { ChildComponentComponent } from './input-exemple/child-component/child-component.component';
import { FormChildComponent } from './form-child/form-child.component';
import { FormParentComponent } from './form-parent/form-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent,
    ChildComponentComponent,
    FormChildComponent,
    FormParentComponent,
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
