import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-juego-piedra-papel-tijeras',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './juego-piedra-papel-tijeras.component.html',
  styleUrl: './juego-piedra-papel-tijeras.component.css'
})
export class JuegoPiedraPapelTijerasComponent {

  // Audios
  winSound!: HTMLAudioElement;
  loseSound!: HTMLAudioElement;
  drawSound!: HTMLAudioElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.winSound = new Audio('../assets/audios/winner-game-sound-404167.mp3');
      this.loseSound = new Audio('../assets/audios/negative_beeps-6008.mp3');
      this.drawSound = new Audio('../assets/audios/material-level-complete-394521.mp3');
    }
  }

  title = 'piedra-papel-tijeras';
  status: string = "";
  statusClass: string = "";

  scorePlayer = 0;
  scoreBot = 0;

  playWin() { this.winSound?.play(); }
  playLose() { this.loseSound?.play(); }
  playDraw() { this.drawSound?.play(); }

  // Emojis para mostrar
  emojis: any = {
    piedra: "🪨",
    papel: "📄",
    tijera: "✂️"
  };

  // Elección del bot SIN emojis
  botChoice(): string {
    const opts = ["piedra", "papel", "tijera"];
    return opts[Math.floor(Math.random() * opts.length)];
  }

  // Lógica del juego
  result(player: string) {
    const bot = this.botChoice();

    // Empate
    if (player === bot) {
      this.playDraw();
      this.status = `Empate 😐 (el oponente eligió ${bot} ${this.emojis[bot]})`;
      this.statusClass = "flash-draw";
      return;
    }

    // Condiciones de victoria
    const win =
      (player === "piedra" && bot === "tijera") ||
      (player === "papel" && bot === "piedra") ||
      (player === "tijera" && bot === "papel");

    if (win) {
      this.playWin();
      this.status = `Ganaste 🎉 (el oponente eligió ${bot} ${this.emojis[bot]})`;
      this.statusClass = "flash-win";
      this.scorePlayer++;
    } else {
      this.playLose();
      this.status = `Perdiste 😢 (el oponente eligió ${bot} ${this.emojis[bot]})`;
      this.statusClass = "flash-lose";
      this.scoreBot++;
    }
  }

  clearScore() {
    this.scorePlayer = 0;
    this.scoreBot = 0;
    this.status = "";
    this.statusClass = "";
  }

}
