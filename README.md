# PearTree

A pear tree which always starts with twelve pears has a peculiar property. Only knights can successfully pick a pear and accordingly reduce the number of pears remaining on the tree.
Write and name a function [1] that returns the number of pears remaining on a special pear tree after an attempted pear pick. 

It takes in two arguments:

i. A structure which has fields “name” and “role” describing a given attempted pear picker e.g. in JSON {name: “Alice”, role: “Software Engineer”} or {name: “Bob”, role: “King”} or {name: “Clara”, role: “Knight”}
ii. The current number of pears on the tree prior to a given single pear picker's attempted pear pick.
Write and name another function [2] which uses function [1] to iterate through [2]’s sole argument,a nonzero length list/array/group of the attempted pear pickers, to determine the number of remaining pears after a group of pickers attempts to pick pears from this special pear tree.

This question is inspired by an old riddle that goes something like this:
“12 pears hanging high. 12 knights riding by.
Each knight took a pear And left 11 hanging there.”

Given the previously described property of the tree and what makes a successful picker, write, name and run a short function [3] that returns what one might expect to be the final number of pears on the tree after 12 knights and a Page named Perfecto have ridden by, using functions [1] and [2]. [NB: in medieval Europe, a Page was a person assigned to assist knights.]
b. The resolution of this riddle is that only one of the twelve knights took a pear and this knight’s name is “Each”.
Write and name functions [4], [5], and [6] which mirror functions [1], [2], and [3] but are modified to accommodate this new condition and test it accordingly. Running function [6] should now yield the answer given in the last line of the riddle.