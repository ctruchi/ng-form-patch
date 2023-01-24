import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    public user!: User;

    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => this.user = data['user']);
    }
}
