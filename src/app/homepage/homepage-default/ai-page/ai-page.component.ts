import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-page',
  templateUrl: './ai-page.component.html',
  styleUrls: ['./ai-page.component.css']
})
export class AiPageComponent {

  title = 'Ai | Digital Marketing';

  panelOpenState = true;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cd.detectChanges();
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'author', content: 'Satendra' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'JSON, JavaScript Object Notation, data exchange, API integration, web development' });
    this.meta.updateTag({ name: 'description', content: 'Learn JSON, the lightweight and widely-used language for data exchange and API integration. Our tutorial covers JSON basics, syntax, data types, and practical examples for using JSON in web development.' });
  }

  aidata = [
    {
      careername: "AI Data Analyst",
      careerclass: "developer",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
    {
      careername: "AI Engineer",
      careerclass: "editor",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
    {
      careername: "Business Intelligence Developer",
      careerclass: "designer",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
    {
      careername: "Big Data Engineer",
      careerclass: "developer",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
    {
      careername: "AI Developer",
      careerclass: "editor",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
    {
      careername: "Research Engineer",
      careerclass: "designer",
      category: "Artificial Intelligence",
      baseurl: "",
      imageurl: "assets/image/home/sate.jpeg",
      salary: ""
    },
  ]
}
