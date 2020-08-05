import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private httpService: HttpService,
    private router: Router) {}
  gameList = []

  ngOnInit() {
    this.httpService.getGameList()
    .subscribe((res) => {
      this.gameList = res.data
    })
  }

  
  goContent() {
  }

  

}
