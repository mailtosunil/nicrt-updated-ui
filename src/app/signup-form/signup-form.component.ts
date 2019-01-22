import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  roleDropdownList = [];
  selectedRoleItems = [];
  roleDropdownSettings = {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.roleDropdownList = [
      { item_id: 1, item_text: 'ADMIN' },
      { item_id: 2, item_text: 'USER' },
    ];
    this.roleDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3
     // allowSearchFilter: true
    };
  }
  userSignUp(): void{
    this.router.navigate(['/login']);
  }

  onItemSelect(item: any) {
    this.selectedRoleItems.push(item);
  }
  onSelectAll(items: any) {
    this.selectedRoleItems.push(items);
  }

  onBack(): void {
    this.router.navigate(['/login']);
  }
}
