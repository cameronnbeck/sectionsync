document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pieceForm');
    const piecesContainer = document.getElementById('piecesContainer');
    let pieces = JSON.parse(localStorage.getItem('pieces')) || [];

    const savePieces = () => localStorage.setItem('pieces', JSON.stringify(pieces));

    const addInstrumentToPiece = (pieceIndex) => {
        const instrumentName = prompt('Enter the instrument name:');
        if (instrumentName) {
            const instrument = { name: instrumentName, percussionists: [] };
            pieces[pieceIndex].instruments.push(instrument);
            savePieces();
            displayPieces();
        }
    };

    const addPercussionistToInstrument = (pieceIndex, instrumentIndex) => {
        const percussionistName = prompt('Enter the percussionist\'s name:');
        if (percussionistName) {
            pieces[pieceIndex].instruments[instrumentIndex].percussionists.push(percussionistName);
            savePieces();
            displayPieces();
        }
    };

    const deletePiece = (pieceIndex) => {
        pieces.splice(pieceIndex, 1);
        savePieces();
        displayPieces();
    };

    const deleteInstrumentFromPiece = (pieceIndex, instrumentIndex) => {
        pieces[pieceIndex].instruments.splice(instrumentIndex, 1);
        savePieces();
        displayPieces();
    };

    const deletePercussionist = (pieceIndex, instrumentIndex, percussionistIndex) => {
        pieces[pieceIndex].instruments[instrumentIndex].percussionists.splice(percussionistIndex, 1);
        savePieces();
        displayPieces();
    };

    const displayPiece = (piece, pieceIndex) => {
        const pieceDiv = document.createElement('div');
        pieceDiv.className = 'piece-box';

        const pieceName = document.createElement('h3');
        pieceName.textContent = piece.name;
        pieceDiv.appendChild(pieceName);

        piece.instruments.forEach((instrument, instrumentIndex) => {
            const instrumentInfo = document.createElement('div');
            const percussionistsText = document.createElement('span');
            percussionistsText.textContent = `${instrument.name} - with ${instrument.percussionists.length} percussionists:`;
            instrumentInfo.appendChild(percussionistsText);

            const percussionistsList = document.createElement('ul');
            instrument.percussionists.forEach((percussionist, percussionistIndex) => {
                const percussionistItem = document.createElement('li');
                percussionistItem.textContent = percussionist;

                const deletePercussionistBtn = document.createElement('button');
                deletePercussionistBtn.textContent = 'Delete';
                deletePercussionistBtn.onclick = () => deletePercussionist(pieceIndex, instrumentIndex, percussionistIndex);
                percussionistItem.appendChild(deletePercussionistBtn);

                percussionistsList.appendChild(percussionistItem);
            });

            instrumentInfo.appendChild(percussionistsList);

            const addPercussionistBtn = document.createElement('button');
            addPercussionistBtn.textContent = 'Add Percussionist';
            addPercussionistBtn.onclick = () => addPercussionistToInstrument(pieceIndex, instrumentIndex);
            instrumentInfo.appendChild(addPercussionistBtn);

            pieceDiv.appendChild(instrumentInfo);
        });

        const addInstrumentBtn = document.createElement('button');
        addInstrumentBtn.textContent = 'Add Instrument';
        addInstrumentBtn.onclick = () => addInstrumentToPiece(pieceIndex);
        pieceDiv.appendChild(addInstrumentBtn);

        const deletePieceBtn = document.createElement('button');
        deletePieceBtn.textContent = 'Delete Piece';
        deletePieceBtn.onclick = () => deletePiece(pieceIndex);
        pieceDiv.appendChild(deletePieceBtn);

        piecesContainer.appendChild(pieceDiv);
    };
    

    const displayPieces = () => {
        piecesContainer.innerHTML = '';
        pieces.forEach(displayPiece);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pieceName = document.getElementById('pieceName').value;
        if (pieceName) {
            pieces.push({ name: pieceName, instruments: [] });
            savePieces();
            displayPieces();
        } else {
            alert('Please enter a name for the piece.');
        }
        form.reset();
    });

    displayPieces();
});
