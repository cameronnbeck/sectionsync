document.addEventListener('DOMContentLoaded', () => {
    const reportContainer = document.getElementById('reportContainer');

    if (!reportContainer) {
        console.error('Report container not found on this page.');
        return; // Exit the script if the container doesn't exist
    }

    const clearReportContainer = () => {
        while (reportContainer.firstChild) {
            reportContainer.removeChild(reportContainer.firstChild);
        }
    };

    const pieces = JSON.parse(localStorage.getItem('pieces')) || [];

    const generateReport = () => {
        clearReportContainer();

        if (pieces.length === 0) {
            reportContainer.textContent = 'No pieces to display.';
            return; // Early exit if there are no pieces
        }

        pieces.forEach((piece, index) => {
            const pieceDetails = document.createElement('div');
            pieceDetails.className = 'piece-details';

            const pieceHeader = document.createElement('div');
            pieceHeader.className = 'piece-header';

            const pieceName = document.createElement('h3');
            pieceName.textContent = piece.name;
            pieceHeader.appendChild(pieceName);

            pieceDetails.appendChild(pieceHeader);

            if (piece.instruments.length === 0) {
                const noInstruments = document.createElement('p');
                noInstruments.textContent = 'No instruments assigned.';
                pieceDetails.appendChild(noInstruments);
            } else {
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
            }

            reportContainer.appendChild(pieceDetails);
        });
    };

    generateReport();

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();
        const filteredPieces = pieces.map(piece => ({
            ...piece,
            instruments: piece.instruments.filter(instrument =>
                instrument.percussionists.map(percussionist =>
                    percussionist.toLowerCase().includes(searchQuery) ? percussionist : null
                ).filter(Boolean)
            )
        })).filter(piece => piece.instruments.length > 0);

        clearReportContainer();
        filteredPieces.forEach(piece => {
            const pieceDetails = document.createElement('div');
            pieceDetails.className = 'piece-details';

            const pieceHeader = document.createElement('div');
            pieceHeader.className = 'piece-header';

            const pieceName = document.createElement('h3');
            pieceName.textContent = piece.name;
            pieceHeader.appendChild(pieceName);

            pieceDetails.appendChild(pieceHeader);

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
                    if (searchQuery && percussionist.toLowerCase().includes(searchQuery)) {
                        percussionistItem.style.backgroundColor = '#FFFF00'; // Highlight the searched percussionist
                    }
                    percussionistsList.appendChild(percussionistItem);
                });
                instrumentInfo.appendChild(percussionistsList);

                pieceDetails.appendChild(instrumentInfo);
            });

            reportContainer.appendChild(pieceDetails);
        });
    });

    // Clear highlighting when search input is cleared
    searchInput.addEventListener('change', () => {
        if (searchInput.value.trim() === '') {
            generateReport();
        }
    });
});
