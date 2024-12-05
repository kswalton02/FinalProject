function generateMealPlan() {
    // Get user inputs
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const goal = document.getElementById('goal').value;
    
    // Validate email format
    if (!validateEmail(userEmail)) {
    alert('Please enter a valid email address.');
    return;
    }
    
    // Get meal input values
    const meals = {
    mondayBreakfast: document.getElementById('mondayBreakfast').value,
    mondaySnack: document.getElementById('mondaySnack').value,
    // Continue for all the other meals...
    mondayLunch: document.getElementById('mondayLunch').value,
    mondaySnack: document.getElementById('mondaySnack2').value,
    mondayDinner: document.getElementById('mondayDinner').value,
    tuesdayBreakfast: document.getElementById('tuesdayBreakfast').value,
    tuesdaySnack: document.getElementById('tuesdaySnack').value,
    tuesdayLunch: document.getElementById('tuesdayLunch').value,
    tuesdaySnack: document.getElementById('tuesdaySnack2').value,
    tuesdayDinner: document.getElementById('tuesdayDinner').value,
    wednesdayBreakfast: document.getElementById('wednesdayBreakfast').value,
    wednesdaySnack: document.getElementById('wednesdaySnack').value,
    wednesdayLunch: document.getElementById('wednesdayLunch').value,
    wednesdaySnack: document.getElementById('wednesdaySnack2').value,
    wednesdayDinner: document.getElementById('wednesdayDinner').value,
    thursdayBreakfast: document.getElementById('thursdayBreakfast').value,
    thursdaySnack: document.getElementById('thursdaySnack').value,
    thursdayLunch: document.getElementById('thursdayLunch').value,
    thursdaySnack: document.getElementById('thursdaySnack2').value,
    thursdayDinner: document.getElementById('thursdayDinner').value,
    fridayBreakfast: document.getElementById('fridayBreakfast').value,
    fridaySnack: document.getElementById('fridaySnack').value,
    fridayLunch: document.getElementById('fridayLunch').value,
    fridaySnack: document.getElementById('fridaySnack2').value,
    fridayDinner: document.getElementById('fridayDinner').value,
    saturdayBreakfast: document.getElementById('saturdayBreakfast').value,
    saturdaySnack: document.getElementById('saturdaySnack').value,
    saturdayLunch: document.getElementById('saturdayLunch').value,
    saturdaySnack: document.getElementById('saturdaySnack2').value,
    saturdayDinner: document.getElementById('saturdayDinner').value,
    sundayBreakfast: document.getElementById('sundayBreakfast').value,
    sundaySnack: document.getElementById('sundaySnack').value,
    sundayLunch: document.getElementById('sundayLunch').value,
    sundaySnack: document.getElementById('sundaySnack2').value,
    sundayDinner: document.getElementById('sundayDinner').value,
    };
    
    // Create the new page content
    let newPageContent = `
    <html>
    <head>
    <title>Meal Plan for ${userName}</title>
    <style>
    body { font-family: monospace; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
    </style>
    </head>
    <body>
    <h1>Meal Plan for ${userName}</h1>
    <p>Email: ${userEmail}</p>
    <p>Goal for the week: ${goal}</p>
    <h2>Weekly Meal Plan</h2>
    <table>
    <tr>
    <th>Day</th>
    <th>Breakfast</th>
    <th>Snack</th>
    <th>Lunch</th>
    <th>Snack</th>
    <th>Dinner</th>
    </tr>
    <tr>
    <td>Monday</td>
    <td>${meals.mondayBreakfast}</td>
    <td>${meals.mondaySnack}</td>
    <!-- Add other meal inputs here -->
    <td>${meals.mondayLunch}</td>
    <td>${meals.mondaySnack2}</td>
    <td>${meals.mondayDinner}</td>
    </tr>
    <!-- Add rows for other days of the week -->
    <tr>
    <td>Tuesday</td>
    <td>${meals.tuesdayBreakfast}</td>
    <td>${meals.tuesdaySnack}</td>
    <td>${meals.tuesdayLunch}</td>
    <td>${meals.tuesdaySnack2}</td>
    <td>${meals.tuesdayDinner}</td>
    </tr>
    <tr>
    <td>Wednesday</td>
    <td>${meals.wednesdayBreakfast}</td>
    <td>${meals.wednesdaySnack}</td>
    <td>${meals.wednesdayLunch}</td>
    <td>${meals.wednesdaySnack2}</td>
    <td>${meals.wednesdayDinner}</td>
    </tr>
    <tr>
    <td>Thursday</td>
    <td>${meals.thursdayBreakfast}</td>
    <td>${meals.thursdaySnack}</td>
    <td>${meals.thursdayLunch}</td>
    <td>${meals.thursdaySnack2}</td>
    <td>${meals.thursdayDinner}</td>
    </tr>
    <tr>
    <td>Friday</td>
    <td>${meals.fridayBreakfast}</td>
    <td>${meals.fridaySnack}</td>
    <td>${meals.fridayLunch}</td>
    <td>${meals.fridaySnack2}</td>
    <td>${meals.fridayDinner}</td>
    </tr>
    <tr>
    <td>Saturday</td>
    <td>${meals.saturdayBreakfast}</td>
    <td>${meals.saturdaySnack}</td>
    <td>${meals.saturdayLunch}</td>
    <td>${meals.saturdaySnack2}</td>
    <td>${meals.saturdayDinner}</td>
    </tr>
    <tr>
    <td>Sunday</td>
    <td>${meals.sundayBreakfast}</td>
    <td>${meals.sundaySnack}</td>
    <td>${meals.sundayLunch}</td>
    <td>${meals.sundaySnack2}</td>
    <td>${meals.sundayDinner}</td>
    </tr>

    </table>
    </body>
    </html>`;
    
    // Open a new window and write the content
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
    }
    
    // Function to validate email
    function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
    }
    
    
    
    // For clearing the form:
    
    function clearForm() {
    document.getElementById('mealPlanForm').reset();
    }
    
    
    // For printing:
    
    function printPlan() {
    window.print();
    }
    
    
    // For downloading:
    
    function downloadPlan() {
    const blob = new Blob([newPageContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'meal_plan.html';
    link.click();
    }