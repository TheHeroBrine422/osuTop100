# osuTop100
a custom search engine for a person's top 100 osu plays

## Usage:

Warning: this script wasnt really made to be user friendly.

1. install libraries & node, `npm i axios express`
2. Set osu id. Get your osu id out of your osu profile link and then put it in the osuid variable (line 4) in api/main.js
3. start api server `node main.js`
4. Potentially set api url in client website. By default it is set to localhost, but you may want to set it to something else if you want to run the api server on another pc.
