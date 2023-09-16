# Context
Cathedral builder is my first game. I always  have been interested in game development, I have an average understanding of how games work, but I never tried to create one myself until the 2023  JS13KGAMES challenge.
I discovered this challenge by chance in January 2023, and I set myself the goal to provide a decent entry in 2023.

# Before the jam
As a beginner, I started to search information about game architecture, especially in a html5 & javascript context, I read a lot of tutorials and did some experiments with external libraries such as phaser and pixi.
It quickly appeared to me that I had to develop my own mini game engine because:

1/ it's fun and challenging

2/ I like to understand and master every single line of code

So I started to work on my MGE (Mini Game Engine) project in April 2023 during Easter holidays. In one week I had a first version with everything I wanted (game loop, mouse and keyboard inputs, sprites,...) except sound.

I then started to learn about the audio web API and created a simple synthetizer and a basic sequencer. To me the music part was the hardest topic to implement despite I previously had knowledge on sound synthesis.

Finally I created a little python script for code minification.

Link to MGE (Mini Game Engine): https://github.com/HomerDilpleu/MiniGameEngineJS

# August 13th - August 20th
The D day I was quite ready with my mini game engine available and plenty of energy to start working.

I loved this year theme "13th century" because it is concrete (not like some previous year themes as "404", "back" or "offline" that seem to me more challenging).
Very quickly,  maybe one hour after the theme was announced, it was clear to me I will create a game dealing with Cathedral building. This is because I wanted to highlight something positive of this period and I think cathedral building in one of the greatest achievment of the humanity.

I have visited a lot of cathedrals in my life as a tourist, but I never really looked at them closely and had no idea how they were build.
So I started to inform about gothic art and cathedrals. I have spent literally hours on the Web trying to understand the structure of a cathedral and how it is possible, just with stones, to build so high.
I learnt a lot  and I will now see the cathedrals with totally different eyes 👀

Anyway, I had the concept,  I had the technical knowledge, I knew more or less how a cathedral is built,... but how will my game look like? Will it be a clicker game, a strategic game, a puzzle,...? How the player will interact and what will he see?
I have really struggled with that and I did not anticipate how difficult it is to define a game play and a game design.
So I have spent one week just drawing on my handbook, trying different scenarios, exploring several gameplays, without writing any line of code...

At the end, I choosed to create a clicker game with a simple work flow (extract rock --> cut stone --> build) and the capacity to upgrade each element with gold. In addition the player will have random bonuses and auto click buttons.

In my mind, the fun part for the player is to see the cathedral being built progressively, so an important part of the project has been dedicated to the Cathedral rendering.

# August 21st - September 10th
Time for development !

After having initiated the project I have started to create a mini 3D rendering engine based on vanishing point perspective.
It allows rendering cubes (stones of our Cathedral) at a given position (x,y,z).
Well,... it's a quick and dirty solution, but it does the job!

Then I started to work on the structure of the Cathedral. From a technical point of view, it is very simple: the structure, stone by stone, is stored in an array and there is a "buildStones" function that draws the "x" next stones.
Stones are drawn in 4 offline canvas representing different player points of view (depth 110, 90, 50 and 0). The right canvas (depending on the mumber of stones already built) is then drawn on the main game canvas.

The most difficult part of the development was to populate the "structure" array in the "defineStructure" function.
To help me keeping ideas clear, I have drawn the  Cathedral in several Excel grids.

![](CathedralUP.png)
![](CathedralSIDE.png)
![](CathedralFRONT.png)

This was really the most complicated part of the project !

# Conclusion
I'm really happy to have released something to this challenge!

The good part is that I have learnt a lot during the game jam and I had lot of fun. The community is cool and I enjoyed seeing the progress of others developers in the Slack chat.

In another hand I did not anticipate how difficult the game design is (according to me more it is more difficult than coding) and the number of hours I had to spend the nigths of these 4 weeks. 💤

I hope you will enjoy the game, do not hesiate to give me your feedback!
