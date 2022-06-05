/*DESCRIPTION:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet*/

//Using the replace method we acna remove the 'https://' from the domain name and replace it with an empty string, this can also be used to remove 'http://' and 'www'.
//Seperate the words at each dot using the split method.
//Use the shift method to print out the first element










const domainName  = url => url.replace("https://", '')
                           .replace("http://",'')
                           .replace('www.', '')
                           .split('.')
                           .shift()
                           


