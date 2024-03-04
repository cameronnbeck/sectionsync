# App Vision

The app is meant for Percussionists in a Symphony Band or Orchestra who need to assign parts to percussionists based on the part's importance and the percussionist's skill.

## Percussionists

A profile/object will be made of each percussionist that can be saved and stored for later use on other pieces or semesters
- Attributes storing skill in the following on a scale from 1-10:
  - Keyboard
  - Snare
  - Aux(illiary)
  - Timpani
  - Drums
 
  - Note: The items listed above are categories, not parts specifically. Each part will fit in one of these categories.
    - Example: The Xylophone Part would fit in the Keyboard category. The Percussion 2 part would fit in the Aux category

## Percussion Parts

Each Song/Piece will have parts associated with them. There will be an ability to create a Piece and have Parts associated with each piece. 
- There will be an ability to name each piece and the parts associated with it
- Each Song will have an importance assigned based on the following:
  - Bass: 1 (most important)
  - Snare: 2
  - Cymbals: 3
  - Timpani: 4
  - Mallets: 5
- Each part will have an assigned category of one of the 5 attributes listed above upon creation by the user
- Each part will also have a difficulty on a scale from 1-10 assigned by the user upon creation.
- NOTE: There are parts that can contain more than one instrument and need a percussionist assigned to each instrument, or multiple instruments on the same part.
  **Example**:The Percussion 1 Part for Clair de Lune has Snare Drum, Triangle, Bass Drum, and Cymbals and needs 3 percussionists. The first to play Snare and Triangle, and the other two to play Cymbals and Bass Drum.

## Auto-Assign

The app will then auto-assign each percussionist one piece per song based on the importance of the part and skill level in each area. (unless there are more or fewer parts than percussionists, then adjustments will be made)

## Reports and Visual Aids

1. Chart of who plays what parts in what song
2. How often each player is playing what part
3. List of all of the instruments needed for every piece, broken down by which instruments are on which piece 

## Wireframe

![Part Assigner Web App Wireframe](https://github.com/calquinton/part-assigner/blob/main/images/Part%20Assigner%20Web%20App%20Wireframe.png)
