#!/bin/bash

# 1. Positional parameters are variables that can store data on the command line in variable names 0 - 9

#     a. $0 always contains the path to the executed script
    
#     b. You can access names past 9 by using parameter expansion like this ${10}
    
# 2. Add all numbers on the command line

# Print the first argument
echo "1st Argument : $1"

sum=0

# $# tells you the number of arguments
while [[ $# -gt 0 ]]; do

    # Get the first argument
    num=$1
    sum=$((sum + num))
    
    # shift moves the value of $2 into $1 until none are left
    # The value of $# decrements as well
    shift
done

echo "Sum : $sum"