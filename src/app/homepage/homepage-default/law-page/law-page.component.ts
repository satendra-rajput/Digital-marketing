import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-law-page',
  templateUrl: './law-page.component.html',
  styleUrls: ['./law-page.component.css']
})
export class LawPageComponent {


  title="Law";

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

  lawdata=[
    {
      careername:"Solicitor",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Public Prosecutor",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Paralegal",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Corporate Lawyer",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Litigator",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Administrative Law Officer",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Legal Assistant",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Legal Secretary",
      careerclass:"developer",
      category:"Law",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    }
  ]
}

