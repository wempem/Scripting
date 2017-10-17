#!/usr/bin/python

# ForElse.py

names = ['yoy', 'yuki', 'zaphod', 'xeno', 'trillion', 'tinu']        #(A)  

for name in names[:]:                                                 #(B)
    if 1< len(name) <= 3:                                             #(C)
        continue                                                      #(D)
    if len(name) > 4:                                                 #(E)
        names.remove( name )  
        print "> 4"
        break                                        #(F)
    if len(name) == 1:                                                #(G)
        print "one letter names not allowed -- good bye"              #(H)
        break                                                         #(I)
    print "name is a four-letter word"                                #(J)
else:                                                                 #(K)
    print "names is empty list"               # ['yoyo', 'yuki', 'xeno', 'tinu']      #(L)

numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if num == 7:
        print "number found"
        break
else:
    print "number not found"

def findNumber(numbers, find):
    for num in numbers:
        if num == find:
            return True

print findNumber(numbers, 10)
