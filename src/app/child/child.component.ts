import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Swal from 'sweetalert2';
import { LoggerService }  from '../logger.service';


class User {
  constructor(public name: string) {}
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges ,DoCheck,OnInit{
  constructor() { alert("Angular Life cycle is in Constructor mode...") }
  ngOnInit() {
    Swal.fire('Life Cycle Initialised')
  }

  @Input() counter!: number;
  changeLog1: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.counter === 0) {
      this.changeLog1 = [];
    }

    let chng = changes['counter'];
    let cur = chng.currentValue;
    let prev = chng.previousValue;
    this.changeLog1.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
  @Input() user!: User;
  @Input() department!: string;

  @Input() color1: any = "#";
  color2: any = "#";
  letters2 = '0123456789ABCDEF';

  changeDetected:boolean = false;
  oldUserName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;
  changeLog2: string[] = [];
  ngDoCheck() {
    this.color2 = '#';
    for (var i = 0; i < 6; i++) {
      this.color2 += this.letters2[Math.floor(Math.random() * 16)];
    }
    if (this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      this.changeLog2.push(`DoCheck: User name changed to "${this.user.name}" from "${this.oldUserName}"`);
      this.oldUserName = this.user.name;

    }

    if (this.department !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog2.push(`DoCheck: Department changed to "${this.department}" from "${this.oldPower}"`);
      this.oldPower = this.department;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        let count = this.noChangeCount += 1;
        let noChangeMsg = `DoCheck called ${count}x when no change to user or department`;
        if (count === 1) {
          this.changeLog2.push(noChangeMsg);
        } else {

          this.changeLog2[this.changeLog2.length - 1] = noChangeMsg;
        }
    }
    this.color2;
    this.changeDetected = false;
  }

  resetAgain() {
    this.changeDetected = true;
    this.changeLog2 = [];
    this.color2;
    this.color2 = '#';
  }

}
