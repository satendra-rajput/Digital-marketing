import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageDefaultComponent } from './homepage-default/homepage-default.component';
import { DigitalMarketingComponent } from './homepage-default/digital-marketing/digital-marketing.component';

import { PopularPageComponent } from './homepage-default/popular-page/popular-page.component';
import { DataSciencePageComponent } from './homepage-default/data-science-page/data-science-page.component';
import { BusinessPageComponent } from './homepage-default/business-page/business-page.component';
import { AiPageComponent } from './homepage-default/ai-page/ai-page.component';
import { MlPageComponent } from './homepage-default/ml-page/ml-page.component';
import { CloudPageComponent } from './homepage-default/cloud-page/cloud-page.component';
import { ManagementPageComponent } from './homepage-default/management-page/management-page.component';
import { ItPageComponent } from './homepage-default/it-page/it-page.component';
import { CyberPageComponent } from './homepage-default/cyber-page/cyber-page.component';
import { HumanitiesPageComponent } from './homepage-default/humanities-page/humanities-page.component';
import { UiUxPageComponent } from './homepage-default/ui-ux-page/ui-ux-page.component';
import { EduactionPageComponent } from './homepage-default/eduaction-page/eduaction-page.component';
import { LawPageComponent } from './homepage-default/law-page/law-page.component';
import { CreativePageComponent } from './homepage-default/creative-page/creative-page.component';

const routes: Routes = [
  {path:'', component:HomepageDefaultComponent, children:[
    {path:'digital-marketing', component:DigitalMarketingComponent},
    {path:'popular-careers', component:PopularPageComponent},
    {path:'data-science', component:DataSciencePageComponent},
    {path:'business-administration', component:BusinessPageComponent},
    {path:'artificial-intelligence', component:AiPageComponent},
    {path:'machine-learning', component:MlPageComponent},
    {path:'cloud-computing', component:CloudPageComponent},
    {path:'management', component:ManagementPageComponent},
    {path:'it-software', component:ItPageComponent},
    {path:'cyber-security', component:CyberPageComponent},
    {path:'humanities', component:HumanitiesPageComponent},
    {path:'ui-ux', component:UiUxPageComponent},
    {path:'education-training', component:EduactionPageComponent},
    {path:'law', component:LawPageComponent},
    {path:'creative', component:CreativePageComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
