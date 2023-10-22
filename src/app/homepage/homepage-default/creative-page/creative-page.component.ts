import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-creative-page',
  templateUrl: './creative-page.component.html',
  styleUrls: ['./creative-page.component.css']
})
export class CreativePageComponent {

  title="Creative";

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
  
  creativedata=[
    {
      careername:"Technical Writer",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Animator",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Art Director",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Creative Director",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"3D Modeler",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Illustrator",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Storyboard Artist",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Game Designer",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sound Engineer",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Video Editor",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Graphic Designer",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Video Game Designer",
      careerclass:"developer",
      category:"Creative",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },

  ]
}
