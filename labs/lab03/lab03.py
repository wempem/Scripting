#!/usr/bin/python

def max(a, b, c):
	if a > b and a > c:
		return a
	elif b > a and b > c:
		return b
	else:
		return c

print max(1,5,3)
print max(6,5,3)
print max(1,3,6)

def median(numbers):
	i = len(numbers)/2
	if i % 2 == 0:
		return sorted(numbers)[i]

	else:
		return (numbers[int(i)] , numbers[int(i - 1)]) 			
		
print median([1,2,3,4,5])
print median([1,2,3,4,5,6])
def palindrome(text):

	return text==text[::-1]

print palindrome("racecar")
print palindrome("cat")

def vowel(text):
	for char in text:
		if char in('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'):
			return True
	return False

print vowel("hi")
print vowel("qwrty")

def consonant(text):
	for char in text:
		if char in('a','e','i','o','u','A','E','I','O','U'):
			return False
	return True
print vowel("hi")
print consonant("qwrty")
