#!/usr/bin/perl -w

### Lab2.pl

print "Enter length of side A: ";
$a = <STDIN>;

print "Enter length of side B: ";
$b = <STDIN>;

$c = sqrt($a*$a + $b*$b);

printf "The length of the hypotenuse is %.2f\n", $c;