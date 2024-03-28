document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pieceForm');
    const piecesContainer = document.getElementById('piecesContainer');
    let pieces = JSON.parse(localStorage.getItem('pieces')) || [];

    function savePieces() {
        localStorage.setItem('pieces', JSON.stringify(pieces));
        displayPieces();
    }

    function createTextInput(placeholder, id = '') {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder;
        if (id) input.id = id;
        return input;
    }

    function createButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.onclick = onClick;
        return button;
    }

    function addInstrumentToPiece(pieceIndex) {
        // Trigger modal/dialogue or form section to capture instrument name
        const instrumentName = window.prompt('Enter the instrument name:');
        if (instrumentName) {
            const instrument = { name: instrumentName, percussionists: [] };
            pieces[pieceIndex].instruments.push(instrument);
            savePieces();
        }
    }

    function addPercussionistToInstrument(pieceIndex, instrumentIndex) {
        // Trigger modal/dialogue or form section to capture percussionist name
        const percussionistName = window.prompt("Enter the percussionist's name:");
        if (percussionistName) {
            pieces[pieceIndex].instruments[instrumentIndex].percussionists.push(percussionistName);
            savePieces();
        }
    }

    function displayPiece(piece, pieceIndex) {
        const pieceDiv = document.createElement('div');
        pieceDiv.className = 'piece-box';

        const pieceName = document.createElement('h3');
        pieceName.textContent = piece.name;
        pieceDiv.appendChild(pieceName);

        piece.instruments.forEach((instrument, instrumentIndex) => {
            const instrumentInfo = document.createElement('div');
            const percussionistsText = document.createElement('span');
            percussionistsText.textContent = `${instrument.name}: ${instrument.percussionists.join(', ') || 'Unassigned'}`;
            instrumentInfo.appendChild(percussionistsText);

            const deleteInstrumentBtn = createButton('Delete Instrument', () => {
                pieces[pieceIndex].instruments.splice(instrumentIndex, 1);
                savePieces();
            });

            instrumentInfo.appendChild(deleteInstrumentBtn);

            const addPercussionistBtn = createButton('Add Percussionist', () => addPercussionistToInstrument(pieceIndex, instrumentIndex));
            instrumentInfo.appendChild(addPercussionistBtn);

            pieceDiv.appendChild(instrumentInfo);
        });

        const addInstrumentBtn = createButton('Add Instrument', () => addInstrumentToPiece(pieceIndex));
        pieceDiv.appendChild(addInstrumentBtn);

        const deletePieceBtn = createButton('Delete Piece', () => {
            pieces.splice(pieceIndex, 1);
            savePieces();
        });
        pieceDiv.appendChild(deletePieceBtn);

        piecesContainer.appendChild(pieceDiv);
    }

    function displayPieces() {
        piecesContainer.innerHTML = '';
        pieces.forEach(displayPiece);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pieceName = document.getElementById('pieceName').value;
        if (pieceName) {
            pieces.push({ name: pieceName, instruments: [] });
            savePieces();
        }
        form.reset();
    });

    displayPieces();
});
