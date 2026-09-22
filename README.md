Documentation Project #1

***NOTE ABOUT VIDEO QUALITY: Had to be compressed substantially to fit the GitHub allowed format. I apologize for the pixelated view. 

Trapped: Film Website
A three-page website for Trapped, a short psychological thriller produced at NYU Abu Dhabi.

Live site: https://irmafirma.github.io/Website_Project_Irma_Preldzic 
Course: IM-UH 1011 
Movie Team: Dina, Irma, Mariam 
Project creator: Irma Preldzic

1. Project Description
Trapped is a short film about claustrophobia, spatial suspense and the survival instinct. It is based on a dream that our teammate Dina had: she is running down a corridor, trying to get into a locked room. When she finally breaks through the door, a figure is waiting for her, speaking in a language she cannot understand.

This website is the film's home online. It has three pages:

PAGE
PURPOSE
Home (index.html)
Presents the film: the title, tagline, genre, a preview of the film with a      pop-up player, and a note about the NYUAD production.
Story (story.html)
Explains where the film came from (Dina's dream) and what the production taught us.
Team (team.html)
Introduces the three people who made the film and their roles.
The goal was not just to host the video. I wanted the website to extend the film, so that visiting it feels like a small piece of the same.


The goal was not just to host the video. I wanted the website to extend the film, so that visiting it feels like a small piece of the same.

2. Concept, Theme and Intended Experience
Concept: The central image of the film is a door, and the site is built around that idea.

Theme: Being shut in, running out of time, and not knowing what is on the other side.
The experience I was aiming for:
Tension first, then a reveal. When the homepage loads, two closed doors cover the screen and then slowly open to reveal the film. The visitor goes through a door before they see anything, just like Dina does in the dream.
A dark, enclosed feeling. Almost everything is near-black. A thin white frame runs around each page like a border that boxes the content in.
One warning color, red (#d72d35) is used sparingly, for the active navigation link, small labels, accent lines and hover states. It works like the red of an emergency sign.
Calm, uncluttered pages. The pages have very little on them, so the film and the story get all the attention.

3. Features
Opening doors animation on the homepage (CSS keyframes).
Film pop-up player: a play button opens a full-screen player, and it closes with the CLOSE button (JS).
Team cards that light up with a red border and a brighter photo on hover (CSS :hover).
Shared navigation with a red underline on the current page.

4. Implementation Process
Step 1: Plan the content and the mood + Assignment 1b. Before writing any code I decided what each page needed to say. The story text came straight from Dina's dream and from our experience of making the film. I chose the dark palette, the red accent and the two fonts at this stage, and sketched the homepage: video at the top left, a short note about NYUAD at the bottom left, and the large title on the right.

















Step 2: Build the skeleton HTML and CSS structure + Assignment 2b. Each page shares the same navigation bar and links to one stylesheet. I used meaningful tags (nav, main, section, header) and added comments so each part is easy to find. Images have alt text, and the pages have their own <title>.




Step 3: Style everything in CSS. I set the base styles first (background, text color, fonts), then styled the navigation, the homepage, the story card and the team cards one at a time. 

Step 4: Create the layout. I rebuilt the homepage with flexbox: a left column (video and NYUAD box) and the title on the right. I also removed the fixed width on the genre tag, because its text was spilling out of the box.

Step 5: Add the animation and interactions.
Doors: two fixed panels cover the screen, and a @keyframes animation slides them off to the left and right after a short delay. animation-fill-mode: forwards keeps them off screen when they finish, and pointer-events: none stops them from blocking clicks.
Film pop-up: the play button adds a show class to a hidden full-screen box and calls .play() on the video. Closing removes the class and calls .pause(). Because the film is a vertical video, it looks much better in the pop-up than in the small preview box.
Team hover: this was first done in JavaScript, but I moved it to CSS :hover because it is purely visual and CSS is the simpler tool.

Step 6: Clean up. I removed unused HTML wrappers and empty <span> tags, replaced them with CSS, made the small labels larger so they are easier to read, and checked that every page still loads correctly.

5. Challenges
A vertical film in a horizontal box. Our footage is shot in portrait, so a small preview cropped it badly. Using object-fit: contain for the preview and a large pop-up player for watching fixed this.
Making an animation that does not get in the way. The doors needed to feel dramatic without blocking the page, which is why they use pointer-events: none and a short duration.
Balancing atmosphere and readability. A very dark design suits the film, but small red text on a dark background is hard to read, so I increased the label sizes and kept the body text light and spaced out.
Time. As with the film itself, the schedule was tight. I had to decide which features mattered most, and keep the design simple enough to finish and test properly.

6. Reflection: Did I Meet my Goals?
What worked. The main goal was to make the site feel like part of the film, and I think the doors opening on the homepage does this best. The dark palette, thin frame and single red accent stay the same on every page, so the site feels like one piece. 

What did not go as planned. The website feels less claustrophobic than the film does. A future version could go further, for example with a tighter corridor-style layout, flickering text, or clips from the film on the story page. **would also like to focus on site responsiveness next as right now on smaller screens it might look like this: 


What I learned. I learned that CSS should handle how things look and JavaScript should handle what things do (the hover effects are simple in CSS, but the film pop-up genuinely needs JavaScript).

***Another learning outcome. I was very stubborn with GitHub. Even though I am a CS Sophomore I had a bad experience with GitHub and was pushing everything to main manually and adding files directly (I know yikes). Until I finally had enough when I was polishing this project and refactoring my code. Thank you for pushing me to do this and learn git once and for all. I struggled a little bit because I already had a repo created and updated, so merging it with my existing local folder was kind of tricky but here are some screenshots of my struggle and victory. 





7. Credits, Tools and Resources
Film and content. The story, concept, script, film and written content were created by the team (Dina, Irma and Mariam) at NYU Abu Dhabi.

Images. The homepage background image and the team member images were generated with ChatGPT.

Git issues. I also used AI assistance (ChatGPT) to help troubleshoot the git errors I ran into, such as the divergent branches and merge conflicts described above.

Learning resources. These pages explain the techniques used in the project and new things I had to learn through MDN Documentation:

MDN Web Docs, hover CSS pseudo-class: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:hover 
MDN Web Docs, background-image CSS property: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-image 
MDN Web Docs, background-attachment CSS property: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-attachment 
MDN Web Docs, background-size CSS property: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-size 
MDN Web Docs, header HTML element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header 
MDN Web Docs, main HTML element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main 
MDN Web Docs, section HTML element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section 
MDN Web Docs, Using CSS animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations 
MDN Web Docs, @keyframes: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes 
MDN Web Docs, Video and audio APIs: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs

Fonts. Playfair Display and Inter, from Google Fonts.

Thank you Professor Jack! 
