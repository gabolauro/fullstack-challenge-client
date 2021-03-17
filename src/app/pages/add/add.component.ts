import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

import { TaskItem } from '../../models/Task.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	task: TaskItem = {
		name: '',
		description: '',
		manager: '',
		asignated: '',
		status: ''

	};

  constructor(	private taskService: TasksService,
  				private router: Router) { }

  ngOnInit(): void {
  }


  saveTask( forma: NgForm ) {

  	// console.log(forma);
  	console.log(forma.value);
  	this.taskService.saveTask(forma.value)
  		.subscribe( res => {
  			console.log(res);
  			this.router.navigate(['/list']);
  		})

  }

}
