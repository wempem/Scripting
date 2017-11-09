#!/bin/bash

# You can use read to receive input which is stored in name
# The p option says that we want to prompt with a string
read -p "What is your name? " name
echo "Hello $name"

read -p "How old are you? " age

# You place your condition with in []
# Include a space after [ and before ]
# Integer Comparisons: eq, ne, le, lt, ge, gt
if [ $age -ge 16 ]
then
echo "You can drive"

# Check another condition
elif [ $age -eq 15 ]
then
echo "You can drive next year"

# Executed by default
else
echo "You can't drive"

# Closes the if statement
fi
