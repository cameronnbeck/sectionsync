<script>
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate assignments
    function generateAssignments() {
        // Example assignments data
        const assignments = [
            { part: 'Keyboard', musician: 'Alice' },
            { part: 'Snare', musician: 'Bob' },
            { part: 'Aux', musician: 'Charlie' }
        ];

        // Target the container where the assignments will be displayed
        const container = document.getElementById('assignments-chart-container');

        // Clear previous assignments
        container.innerHTML = '';

        // Create a list to display assignments
        const list = document.createElement('ul');

        // Loop through the assignments and create list items for each
        assignments.forEach(assignment => {
            const item = document.createElement('li');
            item.textContent = `${assignment.part}: ${assignment.musician}`;
            list.appendChild(item);
        });

        // Append the list to the container
        container.appendChild(list);
    }

    // Attach the event listener to the button
    document.getElementById('generateAssignmentsBtn').addEventListener('click', generateAssignments);
});
</script>
