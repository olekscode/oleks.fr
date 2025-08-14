{
"title": "Test Analyses",
"layout": "blogpost",
"publishDate": "2025-06-01"
}

In Pharo, we have many tests and we love to have more of them. However, it is unclear if the tests are good, not duplicated, ....
There are multiple nice topics around tests. Here is a first list.

The goal of these projects is to help the maintainers deal with their tests.

## Better Test Navigation

- How can we navigate better. For example, could we automatically cluster tests based on some heuristics so that we get an idea about all the tests testing one class, one aspect or having one properties?

- Can we detect duplicated tests?

## Which test to fix first?

Often you have you can have multiple tests failing and we would like to tell the developer what is the first test to fix.
Markus Gaelli from SCG proposed a nice solution and we would like to have it in Pharo. [See Ordering Broken Tests](https://www.researchgate.net/publication/221308163_Ordering_Broken_Unit_Tests_for_Focused_Debugging)

## A linter for tests

Tests are code too and as such they exhibit specific problems. We would like to have a linter for tests. The work we did in the past is a good start [See Test Quality Assessment](https://rmod-files.lille.inria.fr/Team/Texts/Papers/Reic07aTestQualityAssessment.pdf)
