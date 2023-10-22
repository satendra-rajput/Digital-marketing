import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})
export class ManagementPageComponent {

  title="Management";

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

  managementdata=[
    {
      careername:"Market Research Analyst",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Social Media Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Accountant",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Financial Analyst",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sales Executive",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Investment Banker",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Financial Advisor",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Banker",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sales Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Account Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Insurance Agent",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Real Estate Agent",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Marketing Executive",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Relationship Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Portfolio Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Internal Auditor",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Hedge Fund Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Loan Officer",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Investment Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Customer Relationship Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Risk Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Investment Analyst",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Budget Analyst",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Private Equity Analyst",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Risk Specialist",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Mortgage Consultant",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Private Wealth Advisor",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Brand Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Community Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Product Marketing Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sales Engineer",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sales Consultant",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Regional Sales Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Publicist",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Payroll Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Mortgage Broker",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Financial Planner",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Sales Director",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Finance Director",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
    {
      careername:"Advertising Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    }, {
      careername:"Campaign Manager",
      careerclass:"developer",
      category:"Management",
      baseurl:"",
      imageurl:"assets/image/home/sate.jpeg",
      salary:""
    },
  ]
}
