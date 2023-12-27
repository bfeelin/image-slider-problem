# Image Slider Problem

Reference: https://www.youtube.com/watch?v=1eO3LQ1rptA

Create an image slider that allows the user to:
1. Click prev/next to scroll through images
2. Play the slider, which loops through images on a timer
3. Stop the slider

Psuedocode Notes:
Array of objects of images { imageURL: '', show: boolean }
OR just keep an index of the currently visible slide
Slider play/stop state - if play is turn on, slide through images on an interval
- useEffect, if true, useInterval to continuously loop through