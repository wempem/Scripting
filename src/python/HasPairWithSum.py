
list1 = [1, 2, 3, 9]

list2 = [1, 2, 4, 4]

num = 8

def HasPairWithSum(numbers, summation):
    comps = set()
    for number in numbers:
        if number in comps:
            return number, summation - number
        comps.add(summation - number)

print HasPairWithSum(list1, num)
print HasPairWithSum(list2, num)


