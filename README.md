# App Vision

The app is meant for Percussionists in a Symphony Band or Orchestra who need to assign parts to percussionists based on the part's importance and the percussionist's skill.

# Goal 1

Make a working app that allows manual creation of songs with instruments and percussionists assigned to instruments in the song, with charts displaying the information from all peices(songs). Also allow the creation of percussionists that can be chosen for a peice. This is the minimum for what the percussionists would like to have it.

# Goal 2

Allow the user to assign difficulty levels and categorize instruments into the 5 areas in each peice and allow user to give the percussionist skills levels in the 5 areas.

# Goal 3

Allow the user to just need to create a percussionists, assign skill levels, create several peices, create instruments in each peice with a skill level and category, then select the "Auto-Assign" button to automatically compare the percussionist's skill level in the category with the difficulty of the parts and assign all percussionists parts in each song.

# Test Cases

Coming Soon

## Percussionist Skills

A profile/object will be made of each percussionist that can be saved and stored for later use on other pieces or semesters
- Attributes storing skill in the following on a scale from 1-10:
  - Keyboard
  - Snare
  - Aux(illiary)
  - Timpani
  - Drums
 
  - Note: The items listed above are categories, not parts specifically. Each part will fit in one of these categories.
    - Example: The Xylophone Part would fit in the Keyboard category. The Percussion 2 part would fit in the Aux category

## Instruments

Each Song/Piece will have parts associated with them. There will be an ability to create a Piece and have Parts associated with each piece. 
- There will be an ability to name each piece and the instruments
- Each Song will have an importance assigned based on the following:
  - Bass: 1 (most important)
  - Snare: 2
  - Cymbals: 3
  - Timpani: 4
  - Mallets: 5
- Each part will have an assigned category of one of the 5 attributes listed above upon creation by the user
- Each part will also have a difficulty on a scale from 1-10 assigned by the user upon creation.
- NOTE: There are parts that can contain more than one instrument and need a percussionist assigned to each instrument, or multiple instruments on the same part.
  **Example**: The Percussion 1 Part for Clair de Lune has Snare Drum, Triangle, Bass Drum, and Cymbals and needs 3 percussionists. The first to play Snare and Triangle, and the other two to play Cymbals and Bass Drum.

## Mechanics/Relationships
- Each Peice will have instruments, with one percussionist playing one or multiple instruments per peice.
- Each Percussionist will have a skill level in a category, seen above, and each instrument will have a difficulty and category (same as the categories for the percussionist skill)
  - When considering auto-assigning instruments to percussionists on each peice, we would want the user to input the peice, instruments, and percussionists, and have the program assign parts only to percussionists who have the same skill level as the part or higher.
  - It is also good for percussionists to not play one instrument the whole time, so the auto-assign would also try to give the percussionist an even spread in each category as much as possible (that can be overridden by the user)

## Reports and Visual Aids

1. Chart of who plays what parts in what song
2. How often each player is playing what part
3. List of all of the instruments needed for every piece, broken down by which instruments are on which piece 

## Wireframes

New Wireframe Idea:
![SectionSync Wireframe](https://github.com/calquinton/part-assigner/blob/main/images/SectionSync-Wireframe.png)

Original Wireframe:
![Part Assigner Web App Wireframe](https://github.com/calquinton/part-assigner/blob/main/images/Part%20Assigner%20Web%20App%20Wireframe.png)
