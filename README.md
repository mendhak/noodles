
## Instant noodles 🍜 for the office

Instant noodles ratings and reviews, with filters. My focus is noodles which I can have with just hot water and no cooking. That is, in the office.

Website is at: https://noodles.mendhak.com/


## Local development

This repo uses 11ty to generate a single HTML file from many Markdown files.  This allows me to write the noodle reviews in Markdown with some frontmatter and images, and it renders on the page after a build. 

To build and serve: 

    npx eleventy --watch --serve

Then browse to http://localhost:8080/


When adding images, remove the exif using

    exiftool -overwrite_original -all= noodles/images/005.jpg

    