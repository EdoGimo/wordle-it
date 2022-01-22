import sequtils, strutils

var
  word_list: seq[string] 
  puzzle_list: seq[string]

const
  alphabet = toSeq("abcdefghijklmnopqrstuvwxyz")
  endings = toSeq("aeio")

# word list is taken from bigger file (dictionary.txt)
var add: bool
for line in "dictionary.txt".lines:
  add = true
  if line.len == 6 and '\'' notIn line:
    for c in line:
      if c notin alphabet:
        add = false
        break
    if line[5] notin endings:
      add = false
    if add:
      word_list.add line

# puzzle list is taken from smaller file (more reasonable words)
for line in "60_000_parole.txt".lines:
  add = true
  if line.len == 6 and '\'' notIn line:
    for c in line:
      if c notin alphabet:
        add = false
        break
    if line[5] notin endings:
      add = false
    if add:
      puzzle_list.add line
