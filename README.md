# What's for Dinner? 
## Abstract:
The "What's for Dinner?" app is designed to help people have some variety in their dinner choices. People tend to gravitate to making foods they know about and are comfortable making. The "What's for Dinner?" app helps people explore new food ideas without users having to put a lot of effort into researching new meals.

The app includes several built-in food items, categorized as: sides, main dishes, and desserts. Users choose a category and the app picks a random food item from that category. If the user wants ideas for all three categories, they can select "Entire Meal" radio button and the app will provide them with a random food choice from each category.

## Installation Instructions:
This application works in a browser, but if you would like to build your own version of "What's for Dinner?", you can clone the repository to your local machine as follows:
1. Go to the [What's for Dinner? GitHub Repository](https://github.com/jmcsorle/whats-for-dinner).
2. Select the "fork" option on the upperright and follow the prompts to save a fork to your GitHub account:
<img width="1178" alt="image" src="https://user-images.githubusercontent.com/7227063/241814513-f0aff9e2-9c59-498d-a28a-fcfcb1bfcdb7.png">
3. Once you have forked the repository, choose the "Code" drop down to copy the SSH key for cloning: <img width="427" alt="image" src="https://user-images.githubusercontent.com/7227063/241814867-ad2eacaf-2d45-405b-baf2-d8a3c74463e9.png">
4. Open your preferred command-line interface tool (e.g. Terminal) and create a directory where you would like to clone the repository.
5. Change directories into the directory your created.
6. Without the brackets, type [git clone], type a space, then use Command-v on a Mac, or Control-v on PC/Android to past in the SSH key you copied in step 3.

## Preview of App:

The following screen shot shows an example of what the app will provide when the "Entire Meal" radio button is selected:

<img width="913" alt="image" src="https://user-images.githubusercontent.com/7227063/241815444-223eb32c-ae65-4d1f-bad2-8e96d8d76880.png">

## Context:
I am three weeks into the Turing program in Module 1. I had quite a lot of difficulty with CSS for this project, so the majority of my time was spent experimenting with Flexbox, watching YouTube videos on Flexbox and CSS Grid, playing games to learn about Flexbox, and researching how to combine the effective use of margins with Flexbox. I also had some difficulty aligning the radio buttons to the associated text and found some code on Stack Overflow to help with that. Between learning about Flexbox and doing the actual coding for the project, I probably spent a total of 36 hours.

## Contributors:
[Jan McSorley](https://github.com/jmcsorle) was the sole contributor to this project.

## Learning Goals:

The learning goals for this project were:
- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

I used the following tech for this project:
 - Macbook Pro with macOS Ventura 13.3.1(a)
 - Terminal
 - VS Code
 - HTML5
 - JavaScript
 - CSS

## Wins + Challenges:

### Challenges
1. Probably the biggest challenge for me on this project was the lack of time I had to work on it. I missed Thursday afternoon class due to my daughter's graduation and that evening I was not able to get any coding time in because we went to dinner and spent time with family who were in from out of town. The following Friday, I spent the day trying to catch up on what I missed Thursday so that I could complete the audits. I did not start to make any tangible progress on this until Friday night and spent most of Saturday and part of Sunday, just on the CSS. 
2.  Setting up the Background Image - I wanted the image to fill the viewport, regardless of the type of device, and be responsive if the user resized the window for any reason. I did some research and found what I felt was the perfect solution on CSS-Tricks: [Perfect Full Page Background Image](https://css-tricks.com/perfect-full-page-background-image).
3. Getting the Cookpot and Clear button positioned to match the comp. I spent the vast majority of my total project time on this one issue. When I finally figured it out, it was incredibly frustrating that it was so simple. Here's what I did to try to figure this out:
  - I played Flexbox games, I read articles, I reread the Flexbox lesson 3 or 4 times, I watched the recording twice of the lesson I missed when I was out from my daughter's graduation, I watched YouTube videos on Flexbox and Grid and finally saw one where they showed an example of using margin: auto; to move items within their allotted spaces.
  - I combined that with what I had learned about Flexbox and was finally able to get the button positioned by changing the flex direction to column, applying margin-top: auto to the image and the button, and then using align-self to move the botton to the end of the container.

### Wins
1. Figuring out the CSS to align the cookpot image and the clear button.
2. Getting an entire meal to generate with JavaScript.
3. Learning first hand that there are limits to how much coding I can get done in one day. I was so tired Sunday night that I was making multiple mistakes in my code and I did not finish my project on time. When I woke up Monday after resting well, I was able to finish the CYOA portion of the project and refactor some of code I had written when I was tired.
