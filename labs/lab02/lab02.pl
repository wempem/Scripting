#!/usr/bin/perl
use strict;
use warnings;

my $winner;
my $nRow = 0;
my $sum = 0;
my $filename = "scores.txt";
my %hash = ();

open(my $fh,'<' , $filename) or die "File does not open.";
while (<$fh>){
	chomp;
	my($key, $score) = split ' ';
	$hash{$key} = $score;
	$nRow++;
	$sum = $sum + $score;
}

$sum = $sum/$nRow;
open(my $fh1, '>', 'Average.txt') or die "File does not open.";
print $fh1 "$sum";
close $fh1;

$winner = (sort{$hash{$a}<=>$hash{$b}} keys %hash)[$nRow - 1];
open(my $fh2, '>', 'Winners.txt') or die "File does not open.";
print $fh2 "$winner";
close $fh2;

open(my $fh3, '>', 'sorted.txt') or die "File does not open.";
foreach my $sorted (sort {$hash{$a} <=> $hash{$b}} keys %hash){
	print $fh3 $sorted, ' ', "$hash{$sorted}\n";
}
close $fh3

