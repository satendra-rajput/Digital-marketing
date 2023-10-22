import {Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent {

  title="Digital Marketing"
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

  digital=[
    {
      skillname:"Digital Marketing",
      classname:"editor",
      content:"What is Digital Marketing | Online Real State | Content Marketing | Email Marketing | Web Analytics",
      baseurl:'digital-marketing'
    },

    {
      skillname:"Build a Website",
      classname:"designer",
      content:"What is website making? , How to earn money from website? How many types of website are there?",
      baseurl:"build-a-website"
    },
    {
      skillname:"Content Writing",
      classname:"developer",
      content:"What is content writing? Why Content Writing | How to Earn from Content Writing | Types of Blog Articles",
      baseurl:"content-writing"
    },
    {
      skillname:"Google Analytics",
      classname:"designer",
      content:"What is google analytics? How to create google analytics account? Why use Google Analytics?",
      baseurl:"google-analytics"
    },
    {
      skillname:"Copywriting",
      classname:"editor",
      content:"What is copyright? How to claim copyright? How to earn from copyright | How many types of copyright are there?",
      baseurl:"copywriting"
    },
    {
      skillname:"YouTube Ads",
      classname:"developer",
      content:"What is video ads? Why use video ads? Video Ad Format |Set up Video Ad?",
      baseurl:"youtube-ads"
    },
    {
      skillname:"Facebook Ads",
      classname:"designer",
      content:"What is Facebook Ads? Why use Facebook Ads? , How to earn from Facebook Ads | Banned Ads/Accounts",
      baseurl:"facebook-ads"
    },
    {
      skillname:"Facebook Marketing",
      classname:"editor",
      content:"What is Facebook Marketing | Why Content Writing | How to optimize Facebook page | What is Facebook profile and page?",
      baseurl:"facebook-marketing"
    },
    {
      skillname:"Instagram Marketing",
      classname:"designer",
      content:"What is Instagram Marketing | Reels algorithm explained | How to earn from Instagram Marketing | Switch to Business Account",
      baseurl:"instagram-marketing"
    },
    {
      skillname:"YouTube Marketing",
      classname:"developer",
      content:"What is youtube marketing | How to earn from youtube marketing | Upload and optimize videos",
      baseurl:"youtube-marketing"
    },
    {
      skillname:"Pinterest Marketing",
      classname:"editor",
      content:"What is Pinterest Marketing | Why use Pinterest | How to earn from Pinterest Marketing",
      baseurl:"pinterest-marketing"
    },
    {
      skillname:"Linkedln Marketing",
      classname:"designer",
      content:"What is Linkedln Marketing? Why use a background image? How to earn from Linkedln Marketing?",
      baseurl:"linkedln-marketing"
    },
    {
      skillname:"Quora Marketing",
      classname:"developer",
      content:"What is Quora Marketing? Create a Question List | How to earn from Quora Marketing | Optimize Answers",
      baseurl:"quora-marketing"
    },
    {
      skillname:"Twitter Marketing",
      classname:"editor",
      content:"What is Twitter Marketing | Find Customers on Twitter | How to earn from Twitter Marketing | Follow top influencers",
      baseurl:"twitter-marketing"
    },
    {
      skillname:"Freelance",
      classname:"designer",
      content:"What is Freelance? How to get approval | How to earn from Freelance | Create a unique profile?",
      baseurl:"freelance"
    },
    {
      skillname:"SEO Masterclass",
      classname:"developer",
      content:"What is SEO service? Web Design Development? Web Content Writing? SMO Services? Find keywords to rank for?",
      baseurl:"seo-masterclass"
    },
    {
      skillname:"WordPress Masterclass",
      classname:"editor",
      content:"What is WordPress? How to make website on wordpress? How to earn money on wordpress? how to post on wordpress website",
      baseurl:"wordpress-masterclass"
    },
    {
      skillname:"Content Marketing",
      classname:"designer",
      content:"What is Content Marketing | Why use content marketing? How to earn from content marketing? how to sell content",
      baseurl:"content-marketing"
    },
    {
      skillname:"Branding Marketing",
      classname:"developer",
      content:"What is Branding? Why do you need a brand strategy? what makes you different?",
      baseurl:"branding-marketing"
    },
    {
      skillname:"Google Ads",
      classname:"editor",
      content:"Introduction to Google Ads | Types of Ads | Negative keywords | Choosing the right keywords.",
      baseurl:"google-ads"
    },
    {
      skillname:"SEO and Web Services",
      classname:"designer",
      content:"What is SEO Services | Web Design Development | Web Content Writing | SMO Services | Logo Design",
      baseurl:"web-servics-seo"
    },
    {
      skillname:"Affiliate Marketing",
      classname:"developer",
      content:"What is Affiliate Marketing | How to earn Affiliate Marketing | Online Affiliate Marketing",
      baseurl:"affiliate-marketing"
    },
    {
      skillname:"Email Marketing",
      classname:"editor",
      content:"What is Email Marketing | List Building | Segmentation | Conditional Content",
      baseurl:"email-marketing"
    },
    {
      skillname:"Blogger Tutorial",
      classname:"designer",
      content:"What is blogger | How to edit blog in blogger | How to make website on blogger",
      baseurl:"blogger-tutorial"
    }
  ]
}
