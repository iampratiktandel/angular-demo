import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { optionalValidator } from '../optional.directive';


@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.css']
})
export class AddInternComponent implements OnInit {

  public internForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.internForm = this.fb.group({
      name: [null, [ Validators.required, Validators.minLength(4) ]],
      email: [null, [ Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')] ],
      projects: this.fb.group({
        projectOne: [null],
        projectTwo: [null]
      }, { validators: this.optionalValidator }),
      skills: this.fb.array([
        this.addSkillFormGroup()
      ]),
      agree: [false, Validators.requiredTrue]
    });
  }

  public addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: [null, Validators.required],
      experience: [null, Validators.required]
    });
  }

  addSkill() {
    const skillsArray = this.internForm.get('skills') as FormArray;
    skillsArray.push(this.addSkillFormGroup());
  }
  
  deleteSkill(skillIndex: number) {
    const skillsArray = this.internForm.get('skills') as FormArray;
    skillsArray.removeAt(skillIndex);
  }

  onSubmit() {
    console.log('Disabled', this.internForm.value);
    console.log('Disabled but value is accessed', this.internForm.getRawValue());
    
  }

  get name() { return this.internForm.get('name'); }

  get email() { return this.internForm.get('email'); }
  
  get projects() { 
    const projectsArray = this.internForm.get('projects');
    return projectsArray;
  }

  get agree() { return this.internForm.get('agree'); }

  //Disable and Enable
  disableControl() {
    this.internForm.get('name').disable();
    this.internForm.get('email').disable();
  }

  enableControl() {
    this.internForm.get('name').enable();
    this.internForm.get('email').enable();
  }


  disableGroup() {
    this.internForm.get('projects').disable();
  }

  enableGroup() {
    this.internForm.get('projects').enable();
  }


  disableArray() {
    // this.internForm.get('skills').disable();
    const skillsArray = this.internForm.get('skills') as FormArray;
    skillsArray.disable();
  }

  enableArray() {
    this.internForm.get('skills').enable();
    // const skillsArray = this.internForm.get('skills') as FormArray;
    // skillsArray.disable();
  }



  // Cross Validation
   optionalValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const projectOne = control.get('projectOne');
    const projectTwo = control.get('projectTwo');
  
    return projectOne.value == !null || projectTwo.value == !null ? { optionalValidate: true } : null;
  };

}
