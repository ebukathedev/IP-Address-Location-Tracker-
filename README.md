# IP Address Location Tracker

A simple tracker that displays information about an IP address and shows the location on a map.

[See it Live](https://ebukathedev.github.io/IP-Address-Location-Tracker-/)

## Description

The project was aimed at me helping me getting familiar with working with external APIs. 

So in this project I utilised the use of three APIs namely:
- [IPWHOIS](https://ipwhois.io/)
  - This is a free API. I used it to get information about the IP address of the user currently on the site or whatever IP address the user inputs in the form.
  - If the IP address entered is invalid or private, I handle the error with a message on the screen telling the user to try again with a correct IP address.

---

- [Leaflet](https://leafletjs.com/reference.html#map-example)
  - This is a free open source API. I used it to show the location of the IP address on a map. 
  - I traced the location with the longitude and latitude data gotten from IP address.
  - The map didn't look too good (aesthetically pleasing) so I really needed a solution. This is where the next API comes in.
 
---
- [Geoapify](https://apidocs.geoapify.com/docs/maps/map-tiles/#about)
  - This API has a free plan and that's what I used. I used it to change the Map tile or should I say the Map's look to a better visually pleasing one.
  - They have many tiles to choose from.
 
## What I learnt from this
If I say I didn't struggle at all while building this project the I would be lying. There were up an down moments. 

Here's is what I learnt from all the struggle.

- How to use the Rest and Spread operators
- The only way I could get the value of a global variable in fetch or any asynchronous code was if I passed it in a function and usesd it in the function.
- How to blur an input element using the blur() method
- How to use setTimeout 
- How to use fetch and...
- how to think

## Conclusion
Anyways I'm glad to be finally fone with this. Now I can move on to something more complex.

I feel like this Readme is more of blog post than a documentation 😂. 

If you like this feel free to leave a star, share your feedback or connect with me on [Twitter](https://twitter.com/ebukathedev?t=9esioKBcEJ6uwSlUmuw_5A&s=09)

See you later!
