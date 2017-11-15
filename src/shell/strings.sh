#!/bin/bash

str1=""
str2="Sad"
str3="Happy"

# Test if a string is null
if [ "$str1" ]; then
    echo "$str1 is not null"
fi

if [ -z "$str1" ]; then
    echo "str1 has no value"
fi

# Check for equality
if [ "$str2" == "$str3" ]; then
    echo "$str2 equals $str3"
elif [ "$str2" != "$str3" ]; then
    echo "$str2 is not equal to $str3"
fi

if [ "$str2" > "$str3" ]; then
    echo "$str2 is greater then $str3"
elif [ "$str2" < "$str3" ]; then
    echo "$str2 is less then $str3"
fi

rand_str="A random string"
	
# Get string length
echo "String Length : ${#rand_str}"

# Get string slice starting at index (0 index)
echo "${rand_str:2}"

# Get string with starting and ending index
echo "${rand_str:2:7}"

# Return whats left after A
echo "${rand_str#*A }"