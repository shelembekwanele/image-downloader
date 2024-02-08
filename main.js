const request = require('request');
const fs = require('fs');
const path = require('path');

// The URL of the image to download
const imageURL = 'https://www.wallpapers13.com/wp-content/uploads/2016/01/Forest-Falls-desktop-background-wallpaper-1592428-25600x1600-falls-840x525.jpg';

// The name and path of the file to save the image to
const fileName = 'Forest-Falls-desktop-background-wallpaper-1592428-25600x1600-falls-840x525.jpg';
const savePath = path.join(__dirname, 'images', fileName);

// Make the request to download the image
request({ url: imageURL, encoding: null }, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Write the image data to a file
  fs.writeFile(savePath, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Image saved to ${savePath}`);
  });
});
