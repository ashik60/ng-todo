import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() item: Todo;
  @Output() deleteItem = new EventEmitter<object>();

  delete(item: object) {
    this.deleteItem.emit(item);
  }
}
