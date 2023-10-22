import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-ux-page',
  templateUrl: './ui-ux-page.component.html',
  styleUrls: ['./ui-ux-page.component.css']
})
export class UiUxPageComponent {


  title="UI/UX";

  panelOpenState = true;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'author', content: 'Satendra' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'JSON, JavaScript Object Notation, data exchange, API integration, web development' });
    this.meta.updateTag({ name: 'description', content: 'Learn JSON, the lightweight and widely-used language for data exchange and API integration. Our tutorial covers JSON basics, syntax, data types, and practical examples for using JSON in web development.' });
  }

  
  uiuxdata=[
    {
      careername:"UX Designer",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"UI Developer",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Product Designer",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Visual Designer",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Content Strategist",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"UX Researcher",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"User Experience Writer",
      careerclass:"developer",
      category:"UI/UX",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    }  
  ]
}
