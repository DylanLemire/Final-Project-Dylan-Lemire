
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function generateMealPlanContent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    const mealPlanData = generateMealPlanData();

    const mealPlanContent = `
        <html>
        <head>
            <title>${name}'s Meal Plan</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 0;
                }
                h2, h3, ul, li {
                    margin: 0;
                    padding: 0;
                }
            </style>
        </head>
        <body>
            <h2>${name}'s Meal Plan for the Week</h2>
            <p>Email: ${email}</p>
            <p>Weekly Goal: ${goal}</p>
            ${Object.entries(mealPlanData).map(([day, meals]) => `
                <h3>${day}</h3>
                <ul>
                    ${meals.map(meal => `<li>${meal.label}: ${meal.meal}</li>`).join('')}
                </ul>
            `).join('')}
        </body>
        </html>
    `;

    return mealPlanContent;
}

function generateMealPlanData(){
	return {
		Monday: [
			{ label: 'Breakfast', meal: document.getElementById('mondayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('mondaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('mondayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('mondaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('mondayDinner').value },
    ],
		Tuesday: [
			{ label: 'Breakfast', meal: document.getElementById('tuesdayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('tuesdaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('tuesdayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('tuesdaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('tuesdayDinner').value },
    ],
		Wednesday: [
			{ label: 'Breakfast', meal: document.getElementById('wednesdayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('wednesdaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('wednesdayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('wednesdaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('wednesdayDinner').value },
    ],
		Thursday: [
			{ label: 'Breakfast', meal: document.getElementById('thursdayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('thursdaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('thursdayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('thursdaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('thursdayDinner').value },
    ],
		Friday: [
			{ label: 'Breakfast', meal: document.getElementById('fridayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('fridaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('fridayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('fridaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('fridayDinner').value },
    ],
		Saturday: [
			{ label: 'Breakfast', meal: document.getElementById('saturdayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('saturdaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('saturdayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('saturdaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('saturdayDinner').value },
    ],
		Sunday: [
			{ label: 'Breakfast', meal: document.getElementById('sundayBreakfast').value },
			{ label: 'Snack 1', meal: document.getElementById('sundaySnack1').value },
			{ label: 'Lunch', meal: document.getElementById('sundayLunch').value },
			{ label: 'Snack 2', meal: document.getElementById('sundaySnack2').value },
			{ label: 'Dinner', meal: document.getElementById('sundayDinner').value },
    ]
};
	}

function printMealPlan() {
    const mealPlanContent = generateMealPlanContent();
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>' + mealPlanContent + '</body></html>');
    printWindow.document.close();
    printWindow.print();
}


