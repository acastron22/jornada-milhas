import { Router } from '@angular/router';
import { UserService } from './../../core/servicos/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user$ = this.userService.retornarUser();

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
