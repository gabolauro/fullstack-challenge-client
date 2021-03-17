import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

import { TaskItem } from '../../models/Task.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	task: any = {
		name: '',
		description: '',
		manager: '',
		asignated: '',
		status: ''

	};

  constructor( 	private taskService: TasksService,
  				private router: Router,
  				private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {

  	const params = this.activatedRoute.snapshot.params;
  	if (params.id) {
  		// console.log(params.id)
  		this.taskService.getTask(params.id)
  			.subscribe( res => {
  				// console.log(res)
  				this.task = res;
  			})
  	}

  }


  updateTask( forma ) {

  	console.log(this.task.id, forma.value)
  	this.taskService.updateTask(this.task.id, forma.value)
  		.subscribe(
  			res => {
  				console.log(res);
          this.router.navigate(['/list']);
  			})

  }

}
