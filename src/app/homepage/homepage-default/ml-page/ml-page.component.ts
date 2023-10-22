import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ml-page',
  templateUrl: './ml-page.component.html',
  styleUrls: ['./ml-page.component.css']
})
export class MlPageComponent {

  title="Machine Learning";

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

  mldata=[
    {
      careername:"Machine Learning Engineer",
      careerclass:"developer",
      category:"Machine Learning",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"NLP Scientist",
      careerclass:"editor",
      category:"Machine Learning",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Software Devloper (AI/ML)",
      careerclass:"designer",
      category:"Machine Learning",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Statistician",
      careerclass:"developer",
      category:"Machine Learning",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Machine Learning Scientist",
      careerclass:"editor",
      category:"Machine Learning",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
  ]
}
