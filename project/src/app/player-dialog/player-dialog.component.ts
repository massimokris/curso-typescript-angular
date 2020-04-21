import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Countries, Position, Footed, Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  @Input() player: Player
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  private team;
  public countries = Object.keys(Countries).map(key => ({label: key, key: Countries[key]}));
  public position = Object.keys(Position).slice(Object.keys(Position).length / 2).map(key => ({
    label: key,
    key: Position[key]
  }));
  // public position = Object.keys(Position).map(key => ({label: key, key: Position[key]}));
  public footed = Object.keys(Footed).slice(Object.keys(Footed).length / 2).map(key => ({label: key, key: Footed[key]}));

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
      players: [...(this.team.players ? this.team.players : []), playerFormValueKey]
    }
    this.teamService.editTeam(formattedTeam);
  }

  private editPlayer(playerFormValue) {
    console.log(this.player.$key);
    const playerFormValueKey = {...playerFormValue, $key: this.player.$key};
    const playerFormValueFormattedKey = {...playerFormValueKey, key: this.player.$key};

    //delete playerFormValueFormattedKey.$key;
    const moddifiedPlayers = this.team.players ? this.team.players.map(p => {
      return p.key === this.player.$key ? playerFormValueFormattedKey : p;
    }) : this.team.players;

    const formattedTeam = {
      ...this.team,
      players: {...(moddifiedPlayers ? moddifiedPlayers : [playerFormValueFormattedKey])}
    };

    this.playerService.editPlayer(playerFormValueFormattedKey);
    this.teamService.editTeam(formattedTeam);
  }

  onSubmit(playerForm: NgForm) {
    const playerFormValue = {...playerForm.value}
    if(playerForm.valid) {

      if(this.player) {
        this.editPlayer(playerFormValue);
      } else {
        this.newPlayer(playerFormValue);
      }
    }
    window.location.replace('#');
  }

  onClose() {
    this.closeDialog.emit(true);
  }
}
