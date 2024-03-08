import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({ required: true }) buttonType!: 'primary' | 'secondary';
  @Input({ required: true }) buttonName!: string;
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>()

  onClick(): void {
    this.clickEvent.emit()
  }
}
