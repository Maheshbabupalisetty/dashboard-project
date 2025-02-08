# dashboard-project

Objective:-

Design the dashboard using HTML, CSS, JavaScript, etc. Candidates are expected to develop a dashboard featuring at least one graph, a menu, and a table with basic validations. This task will assess your ability to design, implement, and style a functional web dashboard, incorporating essential data management and validation techniques. Meeting this objective should demonstrate practical skills in creating user interfaces and handling real-world data presentations.

Explanation:

index.html:-

Contains meta tags for character set and responsive design (meta tags).
The title of the page is set to "Dashboard."
The CSS file (styles.css) is linked here, which will define the page's style.

Header (<header>): Displays the dashboard title and navigation links (Home, Reports, Settings) in a navigation menu (<nav>).
Main Content (<main>):
Dashboard Sections: There are two main sections:
Graph Section: A <canvas> element with the ID myChart is where the graph will be rendered using Chart.js.
Table Section: Contains a simple table with sample data (Name, Age, Email).
A button with the ID validateButton triggers the table validation.
Footer: Contains a copyright text.
The Chart.js library is loaded at the bottom of the body to ensure the page content is loaded before the scripts are executed.
The script.js file is included after Chart.js to apply JavaScript functionality.

================================================================================================================================================

script.js:-


Chart Initialization:
The window.onload function ensures that the Chart.js graph is rendered once the page is fully loaded.
We get the context (ctx) of the canvas element with getContext('2d'), which is necessary for rendering a 2D chart.
A bar chart is created using new Chart(), where:
type: 'bar' specifies that we want a bar chart.
data contains the labels (months) and the dataset (values for the chart).
The options specify how the graph is displayed, such as setting the Y-axis to start at 0.
Table Validation:
The function validateTableData checks if any cell in the table is empty. It selects all rows in the table and checks each cell's content.
If a cell is empty, the validation fails, and an alert is triggered.
If all cells have data, an alert is shown confirming that the table data is valid.
Button Event Listener:
The validateButton triggers the validateTableData function when clicked. This is set using addEventListener, which listens for a click event and then runs the function.

=================================================================================================================================================

styles.css:-

Body and Layout:

We use a simple sans-serif font for the body.
The header has a dark background (#333) and light-colored text.
Navigation (nav):

The navigation menu is styled with an unordered list. The links (<a>) are white and don’t have underlines, making the menu visually clean.
Dashboard Layout:

The dashboard class uses Flexbox for layout, where the graph section (#graph) takes up 60% of the width, and the table section (#table) takes up 35%.
The overflow-x: auto; in the #table ensures that if the table overflows horizontally, it can be scrolled.
Table Styles:

The table cells (<th>, <td>) have padding and borders for better readability.
The header row (<th>) has a light gray background color (#f4f4f4) for distinction.
Button Styling:

The button is styled with a green background color (#4CAF50) and changes to a darker green when hovered (:hover).
Responsive Design:

A media query ensures that on smaller screens (max-width: 768px), the layout switches to a vertical arrangement (flex-direction: column), making the dashboard more mobile-friendly.

=====================================================================================================================================================

Summary:

The HTML sets up the structure, including the graph and table.
The JavaScript handles the dynamic graph rendering with Chart.js and validates the table data.
The CSS styles the page, ensuring it's responsive and aesthetically pleasing.
