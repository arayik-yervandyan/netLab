import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {FormService} from '../../services/form.service';
import {FormData} from '../../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
	  public formGroup: FormGroup;
    public messageTypes: {label: string, id: number}[];
    public selectedMessageType: string;
    public isDropdownOpened: boolean;

    @ViewChild("dropdownElement", {static: false}) dropdownElement;
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
      const clickedInside = this.dropdownElement.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.toggleDropdown(false);
      }
    }

  	constructor(
  		private _formService: FormService,
  		private _formBuilder: FormBuilder,
  		private _router: Router,
  	) {
      this.selectedMessageType = 'Тема сообщения';

       this.messageTypes = [
         {label: 'Тема 1', id: 1},
         {label: 'Тема 2', id: 2},
         {label: 'Тема 3', id: 3},
         {label: 'Тема 4', id: 4},
       ];
  	}

  	ngOnInit() {
  		this.initForm();
      this.initListener();
  	}

  	public resetForm(event) {
  		event.preventDefault();

      this.markFormGroupTouched(this.formGroup);
  		this.formGroup.reset();
  	}

  	public saveForm(event) {
		event.preventDefault();

    this.markFormGroupTouched(this.formGroup);

		if (this.formGroup.invalid) {
			return
		}

		this._formService.setFormData(new FormData(this.formGroup.getRawValue()));
		this._router.navigate(['/']);
  	}

	private initForm() {
		this._formService.formData
		.pipe(take(1))
		.subscribe((formData: FormData) => this.createFormGroup(formData || new FormData({})));
	}

	private createFormGroup(formData?: FormData) {
		 this.formGroup = this._formBuilder.group({
              user: [formData.user, [Validators.required]],
              messageType: [formData.messageType, [Validators.required]],
              email: [formData.email, Validators.compose([
                Validators.required,
                Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

              ])],
              text: [formData.text, [Validators.required]],
          }
      );

    if (formData.messageType) {
     this.selectedMessageType = formData.messageType;
    }
	}

  private initListener() {
    let dropdownElement = document.querySelector('.custom-select')
  }

  public toggleDropdown(status: boolean, markAsTouched?: boolean) {
    if (markAsTouched) this.formGroup.get('messageType').markAsTouched();
    this.isDropdownOpened = status;
  }

  public selectItem(messageTypeItem: {label: string, id: number}) {
    this.formGroup.get('messageType').patchValue(messageTypeItem.label);
    this.selectedMessageType = messageTypeItem.label;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      this.markFormGroupTouched(control);
    }
  });
  }

}
