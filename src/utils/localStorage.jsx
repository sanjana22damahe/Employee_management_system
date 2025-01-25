
const employees= [
    {
      "id": "E001",
      "name": "Rajesh",
      "firstname": "Raj",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Complete Report",
          "task_description": "Finish the monthly financial report.",
          "task_date": "2025-01-20",
          "category": "Finance",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Attend Meeting",
          "task_description": "Attend the quarterly review meeting.",
          "task_date": "2025-01-22",
          "category": "Meeting",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Update Website",
          "task_description": "Update the content on the company website.",
          "task_date": "2025-01-25",
          "category": "IT",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "task_count": {
        "active": 3,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": "E002",
      "name": "Amit",
      "firstname": "Amit",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Customer Call",
          "task_description": "Call the customer to discuss the product feedback.",
          "task_date": "2025-01-18",
          "category": "Customer Service",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Prepare Presentation",
          "task_description": "Prepare the presentation for the new project.",
          "task_date": "2025-01-19",
          "category": "Marketing",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "task_count": {
        "active": 2,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": "E003",
      "name": "Riya",
      "firstname": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Software Update",
          "task_description": "Complete the latest software update on all company devices.",
          "task_date": "2025-01-20",
          "category": "IT",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Team Workshop",
          "task_description": "Conduct a workshop on effective teamwork strategies.",
          "task_date": "2025-01-22",
          "category": "Training",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ],
      "task_count": {
        "active": 2,
        "new_task": 2,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": "E004",
      "name": "Anjali",
      "firstname": "Anjali",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Client Meeting",
          "task_description": "Meet with the client to discuss project scope and timelines.",
          "task_date": "2025-01-19",
          "category": "Client Relations",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Budget Review",
          "task_description": "Review the department budget for Q1.",
          "task_date": "2025-01-21",
          "category": "Finance",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Team Feedback",
          "task_description": "Gather feedback from the team on the new workflow.",
          "task_date": "2025-01-23",
          "category": "Human Resources",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "task_count": {
        "active": 3,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": "E005",
      "name": "Suresh",
      "firstname": "Suresh",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Complete Coding Task",
          "task_description": "Finish coding for the upcoming product feature.",
          "task_date": "2025-01-18",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Test New Features",
          "task_description": "Test the new features developed for the product.",
          "task_date": "2025-01-20",
          "category": "Testing",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Code Review",
          "task_description": "Review code submitted by the team members.",
          "task_date": "2025-01-22",
          "category": "Development",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "task_count": {
        "active": 3,
        "new_task": 1,
        "completed": 0,
        "failed": 0
      }
    }
  ]

    const admin= {
      "id": "A001",
      "name":"Admin1123",
      "email": "admin@example.com",
      "password": "123"
    }
  

export const setLocalStorage=()=>{
      localStorage.setItem('employees',JSON.stringify(employees))//default method 'employees'=key
      localStorage.setItem('Admin',JSON.stringify(admin))//'Admin'=key

}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))//employees=key which is used to setdata
    const admin=JSON.parse(localStorage.getItem('Admin'))//Admin=key which is used to setdata

   
    console.log(employees,admin)
    return {employees,admin}


}