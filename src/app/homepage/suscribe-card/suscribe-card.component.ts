import { Component } from '@angular/core';
import { PostApiService } from '../servics/post-api.service';

@Component({
  selector: 'app-suscribe-card',
  templateUrl: './suscribe-card.component.html',
  styleUrls: ['./suscribe-card.component.css']
})
export class SuscribeCardComponent {

  POSTS: any=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];  
  todayNumber: number = Date.now();

  constructor(private postService: PostApiService) {}
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
