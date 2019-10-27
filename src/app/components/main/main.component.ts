import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormService} from '../../services/form.service';
import {FormData} from '../../models';
import { Observable, Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [FormService],
})
export class MainComponent implements OnInit, OnDestroy {
	public formDataSubscription: Subscription;
	public formData: FormData;

	constructor(
		private _formService: FormService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
	) {

	}

	ngOnInit() {
		this.formDataSubscription = this._formService.formData
		.subscribe((data: FormData) => this.formData = data);
	}

	ngOnDestroy() {
		if (this.formDataSubscription) this.formDataSubscription.unsubscribe();
	}

	public navigateToForm() {
		this._router.navigate(['form'], {relativeTo: this._activatedRoute});
	}
}
