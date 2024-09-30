import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute, private userService: UserService) {}
  user !:any;
  ngOnInit(){
    const id =  this.route.snapshot.paramMap.get('id');
    if(id) {
      this.getUser(parseInt(id));
    }
  }

  getUser = (id: number) => {
    this.user = this.userService.getUserById(id);
  }
}
