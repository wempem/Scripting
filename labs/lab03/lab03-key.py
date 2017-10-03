
def max(a, b, c):
    if (a > b):
        if (a > c):
            return a
        else:
            return c
    elif (b > c):
        return b
    else:
        return c

print max(5, 2, 1)

def median(numbers):
    numbers.sort()
    if len(numbers) % 2 == 0:
        return (numbers[(len(numbers) / 2) - 1], numbers[len(numbers) / 2]) 
    else:
        return numbers[len(numbers) / 2]

print median([5, 2, 7, 3, 1, 8, 9, 14])

def vowel(text):
    vowels = "aeiou"
    for letter in vowels:
        if letter in text:
            return True
    return False

print vowel("FaR")

def consonant(text):
    consonants = "bcdfghjklmnpqrstvwxyz"
    count = 0
    for letter in consonants:
        if letter in text:
            count += 1
    
    if count == len(text):
        return True

    return False

print consonant("rck")

def reverse(text):
    return text[::-1]

def palindrome(text):
    return text == reverse(text)

print palindrome("racecar")