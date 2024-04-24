import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'amara-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() logout = new EventEmitter();

  public username? = '';

  constructor(public auth: AuthService,) { }

  ngOnInit(): void {
    
    this.auth.user$.subscribe(user => {
      debugger
      this.username = user?.sub;
    });
  }
  
  public logOut() {
    this.logout.emit();
  }

}
