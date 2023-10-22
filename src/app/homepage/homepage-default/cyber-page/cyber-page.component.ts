import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-page',
  templateUrl: './cyber-page.component.html',
  styleUrls: ['./cyber-page.component.css']
})
export class CyberPageComponent {

  title="Cyber Security";

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

  cyberdata=[
    {
      careername:"Cyber Security Analyst",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Ethical Hacker",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Security Architect",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Chief Information Security officer",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Forensic Computer Analyst",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"IT Security Engineer",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Security Systems Administrator",
      careerclass:"developer",
      category:"Cyber Security",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
  ]
}
