# Running : 
Open index.html in the browser & look at the console output

# Module Pattern :
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

# Pros : 

1. No black-box build tools (basic concat + copy)
2. Could easily support ES6 syntax by adding typescript compiler or babel
3. Only single script include, no need to change the index.html references every time you add a new file
4. Don't have to maintain concat after the initial configuration (if you use wild cards)

# Cons : 

1. You have to deal with the order of include in the concat (when initially configuring)
2. Dependencies between modules are not explicitly defined
3. Tooling is not as good, hard to do static analysis