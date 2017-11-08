#!/usr/bin/perl -w

### lab3.pl

use strict;
use warnings;

open FILEIN, "scores.txt" or die "unable to open filename: $!";

my %bowling_scores;
my $player_score;

while ($player_score = <FILEIN>) {
    chomp $player_score;
    my @score_line = split(" ", $player_score);
    $bowling_scores { $score_line[0] } = $score_line[1];
}

my $sum_of_scores;
while ( my ($name, $score ) = each %bowling_scores) {
    #print "$name => $score\n";
    $sum_of_scores += $score;
}    

my @values = values %bowling_scores;
my $average = $sum_of_scores / ($#values + 1);

printf "The average bowling score is %.2f\n", $average;

open AVERAGE, ">average.txt" or die "unable to open filename: $!"; 
printf AVERAGE "The average bowling score is %.2f\n", $average;

my $winner_name;
my $winning_score = $values[0];
while ( my ($name, $score ) = each %bowling_scores) {
    if ($score > $winning_score) {
        $winner_name = $name;
        $winning_score = $bowling_scores { $name };
    }
} 

printf "The winning bowler is $winner_name\n";
printf "The winning score is $winning_score\n";

open WINNER, ">winners.txt" or die "unable to open filename: $!"; 
printf WINNER "The winning bowler is $winner_name\n";
printf WINNER "The winning score is $winning_score\n";

open SORTED, ">sorted.txt" or die "unable to open filename: $!";
foreach my $name (sort { $bowling_scores{$a} <=> $bowling_scores{$b} } keys %bowling_scores) {
    printf "%-8s %s\n", $name, $bowling_scores{$name};
    printf SORTED "%-8s %s\n", $name, $bowling_scores{$name};
}