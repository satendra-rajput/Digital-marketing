import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-humanities-page',
  templateUrl: './humanities-page.component.html',
  styleUrls: ['./humanities-page.component.css']
})
export class HumanitiesPageComponent {

  title="Humanities";

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

  humanitiesdata=[
    {
      careername:"Teacher",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Journalist",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Counselor",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Editor",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Librarian",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sign Language Interpretor",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Psychologist",
      careerclass:"developer",
      category:"Humanities",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    
  ]
}
