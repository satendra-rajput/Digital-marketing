import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { TopCardComponent } from './top-card/top-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { OurCardComponent } from './our-card/our-card.component';
import { SuscribeCardComponent } from './suscribe-card/suscribe-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { CareerCardComponent } from './career-card/career-card.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { HomepageDefaultComponent } from './homepage-default/homepage-default.component';
import { SidebarCardComponent } from './homepage-default/sidebar-card/sidebar-card.component';
import { CareerPathsComponent } from './homepage-default/career-paths/career-paths.component';
import { DigitalMarketingComponent } from './homepage-default/digital-marketing/digital-marketing.component';
import { CompanyProfileComponent } from './homepage-default/company-profile/company-profile.component';
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


const sharehompage=[
  MenuCardComponent,
  TopCardComponent,
  FooterCardComponent,
  BannerCardComponent,
  OurCardComponent,
  SuscribeCardComponent,
  ServiceCardComponent,
  CareerCardComponent,
  LocationCardComponent,
  TestimonialCardComponent
];

@NgModule({
  declarations: [
    sharehompage,
    HomepageDefaultComponent,
    SidebarCardComponent,
    CareerPathsComponent,
    DigitalMarketingComponent,
    CompanyProfileComponent,
    PopularPageComponent,
    DataSciencePageComponent,
    BusinessPageComponent,
    AiPageComponent,
    MlPageComponent,
    CloudPageComponent,
    ManagementPageComponent,
    ItPageComponent,
    CyberPageComponent,
    HumanitiesPageComponent,
    UiUxPageComponent,
    EduactionPageComponent,
    LawPageComponent,
    CreativePageComponent,

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ShareModuleModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports:[
    sharehompage
  ]
})
export class HomepageModule { }
