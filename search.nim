# search words close (one letter difference) to a given word (in both dictionaries)
import std / [os, sequtils]
assert paramCount() == 1, "you need to provide exactly one parameter"
let word = paramStr(1)
assert len(word) == 6, "the parameter must be a 6 letter word"

type
  SearchResult = tuple[contained: bool, neighbours: seq[string]]

func search(word: string, dictionary: seq[string]): SearchResult =
  assert len(word) == 6
  for w in dictionary:
    assert len(w) == 6
    var count = 0
    for i in 0 .. 5:
      if w[i] == word[i]:
        inc count
    if count == 6:
      result.contained = true
    elif count == 5:
      result.neighbours.add w
