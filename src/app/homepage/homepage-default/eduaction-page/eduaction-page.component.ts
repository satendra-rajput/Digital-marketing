import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-eduaction-page',
  templateUrl: './eduaction-page.component.html',
  styleUrls: ['./eduaction-page.component.css']
})
export class EduactionPageComponent {

  title="Education and Training";

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

  educationdata=[
    {
      careername:"Lecturer",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Program Manager",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Learning Consultant",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Foreign Language Teacher",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Academic Research Writer",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Teaching Assistant",
      careerclass:"developer",
      category:"Education and Training",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
  ]
}
