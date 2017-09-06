#!/usr/bin/perl
use strict;
use warnings;

print "Input first Triangle side: ";
my $firstSide = <>;
print "Input second Triangle side: ";
my $secondSide = <>;
my $hyp = $firstSide**2 + $secondSide**2;
print "The hypotenuse of the triangle is: $hyp";
