import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent {


  title="Popular Careers";

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
      careername:"Data Science",
      careerclass:"developer",
      category:"Popular Careers",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"AI Engineer",
      careerclass:"developer",
      category:"Popular Careers",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Digital Marketer",
      careerclass:"developer",
      category:"Popular Careers",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Software Developer",
      careerclass:"developer",
      category:"Popular Careers",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },  
  ]
}

