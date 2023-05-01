import { ChangeDetectionStrategy, Component, Input, Output, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../logger.service';

class User {
  constructor(public name: string) { }
}
@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  providers: [LoggerService]
})
export class GrandChildComponent {
  counter!: number;
  spyLog: string[] = [];
  letters = '0123456789ABCDEF';
  color1 = '#';

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
    this.resetAgain();
  }

  updateCounter() {
    this.counter += 1;
    this.logger.tick();
    this.color1 = '#';
    for (var i = 0; i < 6; i++) {
      this.color1 += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  reset() {
    this.logger.log('-- reset --');
    this.counter = 0;
    this.logger.tick();
    this.color1 = '#';
    for (var i = 0; i < 6; i++) {
      this.color1 += this.letters[Math.floor(Math.random() * 16)];
    }
  }
  user!: User;
  department!: string;
  title = 'DoCheck';
  @ViewChild(ChildComponent) childView!: ChildComponent;


  resetAgain() {
    this.user = new User('Riya Singh');
    this.department = 'Angular';
    if (this.childView) { this.childView.resetAgain();
    }
  }

}
