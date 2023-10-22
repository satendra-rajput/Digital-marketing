import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-data-science-page',
  templateUrl: './data-science-page.component.html',
  styleUrls: ['./data-science-page.component.css']
})
export class DataSciencePageComponent {

  title="Data Science";

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

  dsdata=[
    {
      careername:"Data Scientist",
      careerclass:"developer",
      category:"Data Science",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Data Analyst",
      careerclass:"editor",
      category:"Data Science",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Data Engineer",
      careerclass:"designer",
      category:"Data Science",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
  ]
}
