import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-it-page',
  templateUrl: './it-page.component.html',
  styleUrls: ['./it-page.component.css']
})
export class ItPageComponent {

  title="IT & Software";

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
  
  softwaredata=[
    {
      careername:"Software Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Front End Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Information Security Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"SQL Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Java Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Full Stack Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Software Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"DevOps Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Database Administrator",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Network Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Back-End Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Information Security Analyst",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"QA Analyst",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"IT Technician",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Automation Test Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Test Manager",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Performance Test Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Senior QA Analyst",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Game Programmer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Game Tester",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Game Developer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Technical Support Specialist",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Technical Director",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Systems Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"System Administrator",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Software Architech",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Network Administrator",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Network Technician",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"IT Manager",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"IT Specialist",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"IT Director",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Design Engineer",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Data Manager",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Data Architech",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Internal Audit Manager",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"QA Team Coordinator",
      careerclass:"developer",
      category:"IT & Software",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    
  ]
}
