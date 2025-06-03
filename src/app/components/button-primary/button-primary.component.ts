import { CommonModule } from '@angular/common';
import { Component,  EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("button-text") buttonText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
