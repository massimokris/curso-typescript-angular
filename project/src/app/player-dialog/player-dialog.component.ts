import { Component, OnInit } from '@angular/core';
import { Countries, Position, Footed, Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  private team;
  public countries = Object.keys(Countries).map(key => ({label: key, key: Countries[key]}));
  public position = Object.keys(Position).slice(Object.keys(Position).length / 2);
  // public position = Object.keys(Position).map(key => ({label: key, key: Position[key]}));
  public footed = Object.keys(Footed).map(key => ({label: key, key: Footed[key]}));

  constructor(private playerService: PlayerService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if(teams.length > 0) {
        this.team = teams[0];
      }
    });
  }

  private newPlayer(playerFormValue: Player) {
    const key = this.playerService.addPlayer(playerFormValue).key;
    const playerFormValueKey = {
      ...playerFormValue,
      key
    }
    const formattedTeam = {
      ...this.team,
      players: [...(this.team.player ? this.team.players : []), playerFormValueKey]
    }
    this.teamService.editTeam(formattedTeam);
  }
}
