# PearTree

## Technology used

#### Development
- JavaScript

#### Testing
- Jasmine

### Getting started

You can interact with this programme from the JavaScript console in your browser:

1. Clone this repo
2. Open SpecRunner.html
3. Open your browser's dev tools and visit the console tab

Example from the first function the value of pears drops by one when a Knight picks the tree.
<img width="608" alt="Screenshot 2021-05-11 at 09 15 56" src="https://user-images.githubusercontent.com/57540755/117782710-cb61db00-b239-11eb-8a29-45a78c9926e4.png">

## The Task

A pear tree that always starts with twelve pears has a peculiar property. Only knights can successfully pick a pear and accordingly reduce the number of pears remaining on the tree.
Write and name a function [1] that returns the number of pears remaining on a special pear tree after an attempted pear pick. 

It takes in two arguments:

- i. A structure which has fields “name” and “role” describing a given attempted pear picker e.g. in JSON {name: “Alice”, role: “Software Engineer”} or {name: “Bob”, role: “King”} or {name: “Clara”, role: “Knight”}

- ii. The current number of pears on the tree prior to a given single pear picker's attempted pear pick.
Write and name another function [2] which uses function [1] to iterate through [2]’s sole argument,a nonzero length list/array/group of the attempted pear pickers, to determine the number of remaining pears after a group of pickers attempts to pick pears from this special pear tree.

``` This question is inspired by an old riddle that goes something like this:
“12 pears hanging high. 12 knights riding by.
Each knight took a pear And left 11 hanging there.”
```

- Given the previously described property of the tree and what makes a successful picker, write, name and run a short function [3] that returns what one might expect to be the final number of pears on the tree after 12 knights and a Page named Perfecto have ridden by, using functions [1] and [2]. [NB: in medieval Europe, a Page was a person assigned to assist knights.]

- b. The resolution of this riddle is that only one of the twelve knights took a pear and this knight’s name is “Each”.
Write and name functions [4], [5], and [6] which mirror functions [1], [2], and [3] but are modified to accommodate this new condition and test it accordingly. Running function [6] should now yield the answer given in the last line of the riddle.

## My Approach

I decided to take practise my TDD approach with this challenge. Down below I have linked to each of the commits that pass/solve the task being asked.  

#### Part A
i.) Create a function for one person passing through that takes one pear if their role is equal to a 'Knight'.
https://github.com/Ovy95/PearTree/commit/302065ce559ba44015c97afa0fb3a2f78f5b31d7#diff-9cca9de963abd63d7fea69e4bd96712db2de7561e9518a8138511c890a2f3790

ii.) Create a 2nd function that uses our first function to iterate through a group of 'PearPickers'/ and return the result after. In my test for this, I used two 'Knights' and a 'Software engineer' the result of the pears left on the tree was 10.
https://github.com/Ovy95/PearTree/blob/9c7cfda524ce23d51b8424f1f366d84e989de80d/spec/pearTreeSpec.js
https://github.com/Ovy95/PearTree/blob/9c7cfda524ce23d51b8424f1f366d84e989de80d/src/pearTree.js

iii.) Returns the list of the 12 Knights that got all the pears along with 'Perfecto' the Page who helped them.
https://github.com/Ovy95/PearTree/commit/b0fa963a6b37518d5c6519ae617be4fccd90b9b0

#### Part B

My last commit which was to complete the riddle being if the Knights name was 'Each' then remove 1 pear. I returned the riddle along with the value of the current pears for my answer here. I also created another source and spec file to test it and to keep it separated. 
https://github.com/Ovy95/PearTree/blob/dcfe339385fe3a14822633ca01e7df66ab4cf505/spec/KnightEachSpec.js
https://github.com/Ovy95/PearTree/blob/dcfe339385fe3a14822633ca01e7df66ab4cf505/src/KnightEach.js

My Lastest commit I updated all the tests 

### Future work

Edge cases
- Returning errors for invalid inputs


## Testing

Tests were written with [Jasmine (3.6.0)](https://github.com/jasmine/jasmine/releases).

To run the tests, clone the repo locally and run:

```bash
$> cd PearTree
$> open ./SpecRunner.html
```

<img width="1082" alt="Screenshot 2021-05-11 at 09 08 56" src="https://user-images.githubusercontent.com/57540755/117781490-9f922580-b238-11eb-8779-cee8f35a6c2e.png">
