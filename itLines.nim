import sequtils, strutils, strformat, random

var
  word_list: seq[string]

const removeFromWordList = @["dorie", "borii"]
var
  countTotal = 0
  countKept = 0

randomize(195)
shuffle(puzzle_list)
"""
