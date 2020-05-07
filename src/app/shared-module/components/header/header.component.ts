import { Component, OnInit } from '@angular/core';
import {PropertyDetailService} from'src/app/shared/property-detail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:PropertyDetailService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
