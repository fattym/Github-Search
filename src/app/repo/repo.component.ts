import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  profiles: any;
  repos: any;
  username:string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }
  findProfiles(){
  	this.profileService.updateProfile(this.username);
  	// tslint:disable-next-line: indent
  	// tslint:disable-next-line: indent
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		// tslint:disable-next-line: indent
  		this.profiles = profile;
  	// tslint:disable-next-line: indent
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})
  }

}
