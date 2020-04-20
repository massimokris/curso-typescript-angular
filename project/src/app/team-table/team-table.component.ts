import { Component, OnInit } from '@angular/core';
import { TeamService, TeamTableHeaders } from '../services/team.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Team } from '../interfaces/team';
import { Countries } from '../interfaces/player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  public teams$: Observable<Team[]>;
  public tableHeaders = TeamTableHeaders;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      console.log(teams)
      if(teams.length === 0) {
        const team: Team = {
          name: 'Boca Juniors',
          country: Countries.Argentina,
          players: null
        };
        this.teamService.addTeam(team);
      }
    });
  }
}
