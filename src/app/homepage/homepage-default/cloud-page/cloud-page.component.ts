import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cloud-page',
  templateUrl: './cloud-page.component.html',
  styleUrls: ['./cloud-page.component.css']
})
export class CloudPageComponent {


  title="Cloud Computing";

  

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
  clouddata=[
    {
      careername:"Cloud Engineer",
      careerclass:"designer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud DevOps Engineer",
      careerclass:"developer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Architect",
      careerclass:"editor",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Security Engineer",
      careerclass:"designer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Research Analyst",
      careerclass:"developer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Developer",
      careerclass:"editor",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Network Architech",
      careerclass:"designer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Network Engineer",
      careerclass:"developer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud System Administrator",
      careerclass:"editor",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Automation Engineer",
      careerclass:"designer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"cloud Security Manager",
      careerclass:"developer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Product Manager",
      careerclass:"editor",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Cloud Sales Manager",
      careerclass:"designer",
      category:"Cloud Computing",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    }
  ]
}
