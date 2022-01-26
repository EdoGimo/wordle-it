import random

path = '/PATH/TO/dic6.txt'	#or whatever path
path2 = '/PATH/TO/row.txt'

text = []
with open(path, 'r') as filename:
	for line in filename:
		text.append(str(line).rstrip("\n"))

random.shuffle(text)

with open(path2,'w') as filename:
	filename.write(str(text))
