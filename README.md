

To build and serve: 

    npx eleventy --watch --serve

Then browse to http://localhost:8080/


When adding images, remove the exif using

    exiftool -all= noodles/images/005.jpg -overwrite_original

    