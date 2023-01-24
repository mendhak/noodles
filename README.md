
## Instant noodles 🍜 for the office

Instant noodles ratings and reviews, with filters. My focus is noodles which I can have with just hot water and no cooking. That is, in the office.

Website is at: https://noodles.mendhak.com/


## Local development

This repo uses 11ty to generate a single HTML file from many Markdown files.  This allows me to write the noodle reviews in Markdown with some frontmatter and images, and it renders on the page after a build. 

### Run with Docker Compose

    docker-compose up

Then browse to http://localhost:8080/

### Run with NodeJS on host

Install dependencies, 

    npm install

To build and serve: 

    npx eleventy --watch --serve

Then browse to http://localhost:8080/


## Adding new images

When adding images, remove the exif using

    exiftool -overwrite_original -all= noodles/images/005.jpg

Resize it to 800px width.      

## Adding new files

When adding new content, create the new .md file, then commit it before running docker-compose up.  
This is because the post date comes from the 'git Last Modified' date, which requires the file being committed first. 
    