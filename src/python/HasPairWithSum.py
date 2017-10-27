def HasPairWithSum(numbers, summation):
    comps = set()
    for number in numbers:
        if number in comps:
            return summation - number, number
        comps.add(summation - number)

list1 = [1, 2, 3, 9]
list2 = [1 ,2, 4, 4]
list3 = [3, 1, 7, 19, 87, 22, 41, 33, 14, 11, 2]

print list1.__str__() + ", find 2 that sum to 8 => " + HasPairWithSum(list1, 8).__str__()
print list2.__str__() + ", find 2 that sum to 8 => " + HasPairWithSum(list2, 8).__str__()
print list3.__str__() + ", find 2 that sum to 17 => " + HasPairWithSum(list3, 17).__str__()
