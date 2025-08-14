{
"title" : "About Pharo",
"layout" : "index",
"publishDate" : "2025-06-01"
}

# Pharo

[Pharo](http://www.pharo.org) is a beautiful dynamically-typed reflective pure object-oriented language that we have been developing since 2008.
It is inspired by Smalltalk (I'm extremely grateful to Alan Kay and Dan Ingalls - they were so visionary and right). Now our vision for Pharo is to reinvent Smalltalk and produce a better system. 
From that perspective, I'm used to say that Pharo is what we have and not what we want. 
In essence, Pharo is the beginning of the journey and not the final goal. And you can change its future.

_Some nice testimonies._ You can check what companies using Pharo are saying about Pharo: [Video](https://youtu.be/6tdkKNX2g4s)




## Some language challenges



There are many aspects I would like to see being explored either by us or by others.
If you want to explore some of the following aspects, please go and let us know. 
I'm really interested in any topics that evolve Pharo into a better Pharo. 


Here are some topics I would love to see improvements. 
- Type inferencer: How can we benefit from types without the pain - how to adapt Castagna's work on type inference to Pharo?
- Isolation and capabilities: How can we provide more modularity within the language?
- Channels and others: Can we improve the concurrent model (without falling into the actor model :))
- Parallelism (the story behind the global interpreter loop): How can we take advantage of multiple CPUs?
- Microkernels (see the PhD of Guillermo Polito): How can we build different specific language kernels?
- Multiple language kernels running side by side: Could we have a runtime supporting the execution of programs written in different versions of the language? 
- Pharoish-like language for IoT: What are the abstractions and runtime to run Pharo and one of its flavors into small IoT-oriented devices. 
- Dynamic inliner for our lovely VM: Can we produce a VM that goes 2 times faster?
- Better integration with OS
- Pharo-based shell: I would love to have a Pharo shell that we can easily script and debug.

## Some tool challenges

- We are strong believers in tests. Now how can we get more out of them?
- How can we "optimize" tests: reduce duplication, help developers navigate them? See my paper [Test Quality Assessment -- PDF](https://rmod-files.lille.inria.fr/Team/Texts/Papers/Reic07aTestQualityAssessment.pdf)
- How can we better/faster debug programs? (check the work of Steven Costiou). How can we go further?


So if you are interested in doing a PhD or doing your own research on such topics, contact me so that we can exchange.