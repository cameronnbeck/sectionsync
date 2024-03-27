document.addEventListener('DOMContentLoaded', () => {
    const reportContainer = document.getElementById('reportContainer'); // Make sure this element exists in your Reports.html
    

    // Clear existing content to prevent duplication
    const clearReportContainer = () => {
        while (reportContainer.firstChild) {
            reportContainer.removeChild(reportContainer.firstChild);
        }
    };

    // Fetching data from Local Storage
    const pieces = JSON.parse(localStorage.getItem('pieces')) || [];

    // Generate and display the report
    const generateReport = () => {
        clearReportContainer(); // Ensure the container is empty before generating the report

        pieces.forEach((piece, index) => {
            // Container for each piece
            const pieceDetails = document.createElement('div');
            pieceDetails.className = 'piece-details';

            // Header for each piece
            const pieceHeader = document.createElement('div');
            pieceHeader.className = 'piece-header';

            // Piece name
            const pieceName = document.createElement('h3');
            pieceName.textContent = piece.name;
            pieceHeader.appendChild(pieceName);

            pieceDetails.appendChild(pieceHeader);

            // Listing instruments and percussionists
            piece.instruments.forEach(instrument => {
                const instrumentInfo = document.createElement('div');
                instrumentInfo.className = 'instrument-info';

                const instrumentName = document.createElement('span');
                instrumentName.textContent = instrument.name + ': ';
                instrumentInfo.appendChild(instrumentName);

                const percussionistsList = document.createElement('ul');
                instrument.percussionists.forEach(percussionist => {
                    const percussionistItem = document.createElement('li');
                    percussionistItem.textContent = percussionist;
                    percussionistsList.appendChild(percussionistItem);
                });
                instrumentInfo.appendChild(percussionistsList);

                pieceDetails.appendChild(instrumentInfo);
            });

            reportContainer.appendChild(pieceDetails);
        });
    };

    generateReport(); // Call to generate the report when the page loads
});
