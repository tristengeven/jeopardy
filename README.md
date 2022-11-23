# Jeopardy Game

This is a simple Jeopardy style game board. It reads in categories from the ```~\data\categories.json``` file and questions from the ```~\data\questions.json``` file. To use this, all you have to do is edit these two files with the categories and questions you want, and you're off! Please make sure each ```question``` has a ```"category"``` property which corresponds to one of the ```categories``` in the file. 

## Usage

1) Update ```~\data\categories.json``` & ```~\data\questions.json``` as needed.
2) Run ```npm run start``` for development mode.
3) To build, follow standard React app build procedures.