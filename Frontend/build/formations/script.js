const formationSelect = document.getElementById('formationSelect');
const formationContainer = document.getElementById('formationContainer');

formationSelect.addEventListener('change', createFormation);

function createFormation() {
    const formationType = formationSelect.value;
    formationContainer.innerHTML = ''; // Clear any existing formation
    
    let formation;

    switch (formationType) {
        case '4-4-2':
            formation = [
                ['position', null, null, null, 'position'],
                [null, 'position', 'position', 'position', null],
                ['position', 'position', null, 'position', 'position'],
                [null, null, 'goalie', null, null]
            ];
            break;
        case '4-3-3':
            formation = [
                ['position', null, null, null, 'position'],
                [null, 'position', 'position', 'position', null],
                ['position', 'position', 'position', 'position', 'position'],
                [null, null, 'goalie', null, null]
            ];
            break;
        case '3-5-2':
            formation = [
                ['position', null, 'position', null, 'position'],
                ['position', 'position', 'position', 'position', 'position'],
                ['position', null, 'position', null, 'position'],
                [null, null, 'goalie', null, null]
            ];
            break;
        default:
            break;
    }

    formation.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add(cell ? (cell === 'goalie' ? 'goalie' : 'position') : 'empty');
            if (cell) {
                cellDiv.addEventListener('dragover', dragOver);
                cellDiv.addEventListener('drop', drop);
            }
            formationContainer.appendChild(cellDiv);
        });
    });
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const playerId = e.dataTransfer.getData('text');
    const player = document.getElementById(playerId);
    const target = e.target;
    
    // Check if the target position already has a player
    if (target.children.length > 0) {
        const currentPlayer = target.children[0];
        
        // Swap players
        target.appendChild(player);
        player.parentNode.appendChild(currentPlayer);
    } else {
        target.appendChild(player);
    }
}

// Add dragstart event listener to players
const players = document.querySelectorAll('.player');
players.forEach(player => {
    player.addEventListener('dragstart', dragStart);
});
