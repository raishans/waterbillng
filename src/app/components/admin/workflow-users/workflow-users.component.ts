import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow-users',
  templateUrl: './workflow-users.component.html',
  styleUrls: ['./workflow-users.component.css']
})
export class WorkflowUsersComponent {



  workflowUsers: any[] = [];

  // constructor(private userService: WorkflowUsersService) { }

  // ngOnInit(): void {
  //   this.fetchWorkflowUsers();
  // }

  // fetchWorkflowUsers(): void {
  //   this.userService.getAllWorkflowUsers().subscribe(
  //     (data) => {
  //       this.workflowUsers = data;
  //       setTimeout(() => {
  //         $('#workflow_users').DataTable({
  //           responsive: true,
  //           autoWidth: false
  //         });
  //       }, 0);
  //     },
  //     (error) => {
  //       console.error('Error fetching workflow users:', error);
  //     }
  //   );
  // }

  // editWorkflowUser(id: number): void {
  //   this.userService.editWorkflowUser(id).subscribe(
  //     (response) => {
  //       // Handle edit response
  //       console.log('Edit successful:', response);
  //     },
  //     (error) => {
  //       console.error('Edit error:', error);
  //     }
  //   );
  // }

  // deleteWorkflowUser(id: number): void {
  //   this.userService.deleteWorkflowUser(id).subscribe(
  //     (response) => {
  //       // Handle delete response
  //       console.log('Delete successful:', response);
  //     },
  //     (error) => {
  //       console.error('Delete error:', error);
  //     }
  //   );
  // }

}
