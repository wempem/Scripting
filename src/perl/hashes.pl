use strict;
use warnings;

my %scientists = (
    "Newton" => "Isaac",
    "Einstein" => "Albert",
    "Darwin" => "Charles",
);

print $scientists{"Newton"};
print $scientists{"Einstein"};
print $scientists{"Darwin"};
print $scientists{"Dyson"};
print "\n";

my @scientists = %scientists;
print "@scientists";
print "\n";

my $data = "orange";
my @data = ("purple");
my %data = ( "0" => "blue");

print $data;      # "orange"
print $data[0];   # "purple"
print $data["0"]; # "purple"
print $data{0};   # "blue"
print $data{"0"}; # "blue"




my %mascots = (
    CSU => "Bucs",
    CofC => "Cougars",
    Citadel => "Bulldogs",
);

print $mascots{ CSU };
print "\n";

my @k = keys %mascots;
my @v = values %mascots;
print "@k\n";
print "@v\n";

my %hashbrowns = qw \pet cat color\;
print $hashbrowns { color };
print $hashbrowns { pet };