import { Score } from '../schedule/score';
import { Player } from './player';

export class Event {
  id: number;
  categoryId: number;
  name: string;
  date: string;
  score: Score;
  firstPlayer: Player;
  secondPlayer: Player;
  imageBase64: string;

  constructor(categoryId: number = 0, name: string = '', date: string = '', firstParticipant: string = '', firstScore: number = 0,
              secondParticipant: string = '', secondScore: number = 0, banner: string = '') {
    this.categoryId = categoryId;
    this.name = name;
    this.date = date;
    this.firstPlayer = new Player();
    this.firstPlayer.name = firstParticipant;
    this.score = new Score();
    this.score.scorePlayer1 = firstScore;
    this.score.scorePlayer2 = secondScore;
    this.secondPlayer = new Player();
    this.secondPlayer.name = secondParticipant;
  }

  update(event: Event) {
    this.name = event.name;
    this.date = event.date;
    this.firstPlayer = event.firstPlayer;
    this.score = event.score;
    this.secondPlayer = event.secondPlayer;
    this.imageBase64 = event.imageBase64;
  }
}
