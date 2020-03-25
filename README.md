# Watch Your Steps

![Badge](https://img.shields.io/badge/Watch%20Your%20Steps-BrightGreen)
![Badge](https://img.shields.io/badge/Step%20Counter-informational)
![Badge](https://img.shields.io/badge/Map-ff69b4)
![Badge](https://img.shields.io/badge/Health-yellow)
![Badge](https://img.shields.io/badge/Time%20Walked-orange)

Link: https://www.google.com/

A site to help people live a healthy life.It tells its user the **Number of Steps travelled** along with **Distance** and **Time**. The user can even see the **Starting and Stopping Locations on a Map**.


## Whole idea in a pic
![Pic](https://cdn5.vectorstock.com/i/thumb-large/33/49/footprint-trail-from-start-point-to-finish-pin-vector-26643349.jpg)


## Applications
  **In Health Industry**
  * One can easily achieve a goal by knowing the number of steps they have walked.
    * Youngs are among the most benefitted ones
  * A responsive map to see both beginnning and ending locations
  * Distance travelled along with time required to travel it.


## For users
* Enter the details 
  * Name
  * Age
  * Weight(in kg)
  * Height (in m)
* Press the start button when you begin walking
* Press the stop button when you are done walking
* Press the view button to take a look at your starting and ending locations


## Sneak peak
This uses the ‘haversine’ formula to calculate the great-circle distance between two points – that is, the shortest distance over the earth’s surface – giving an ‘as-the-crow-flies’ distance between the points (ignoring any hills they fly over, of course!).

**Haversine formula** :	

a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)

c = 2 ⋅ atan2( √a, √(1−a) )

d = R ⋅ c

where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
note that angles need to be in radians to pass to trig functions!
  
  
## Used
  * Language
    * HTML
    * CSS
    * JAVASCRIPT
  * Framework
    * Bootstrap
   

## Requirements
* Browser(provided versions and above)
  * Internet Explorer/Edge  9.0 
  * Google Chrome  5.0 - 49.0 (http),50.0 (https)
  * Firefox  3.5 
  * Safari  5.0
  * Opera 16.0
  
  
## Limitations
  * The ending location's latitude and logitude must be different from the starting location's latitude and longitude.
  * One's step length is approximately 42% of their height.
  

## Credits
  * Images
      * https://cdn5.vectorstock.com/i/thumb-large/33/49/footprint-trail-from-start-point-to-finish-pin-vector-26643349.jpg
      * https://health.tymout.com/wp-content/uploads/2018/09/4.1.jpeg
      * https://image.shutterstock.com/image-vector/black-silhouette-foot-human-footprint-260nw-1009413049.jpg
      * https://steps.app/media/pages/home/simple-beautiful/1862203010-1585062049/icon-simple.svg
  * Sources
       * https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5488109/
       * https://community.esri.com/groups/coordinate-reference-systems/blog/2017/10/05/haversine-formula
  * Map
      * https://openlayers.org/en/latest/doc/quickstart.html
      * https://openstreetmap.be/en/projects/howto/openlayers.html
      * https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js
      * https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/css/ol.css
      * https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js
      * https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/css/ol.css
      * https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/css/ol.css
  * For Bootstrap
      * http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js
      * https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
      * http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css  
