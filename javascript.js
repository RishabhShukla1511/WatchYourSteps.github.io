function getHeight()
{
    return document.getElementById("height").value;
}

function getWeight()
{
    return document.getElementById("weight").value;
}

var steps,distance,start_hour,start_minute,start_second,is_displayed=0;

var is_stop_clicked=new Boolean(false);
var is_start_clicked=new Boolean(false);

var start_location=new Array();
var stop_location=new Array();

var start_location_r=new Array();
var stop_location_r=new Array();

var start_time=[];

function getStartLocation()
{
    var h=getHeight();
    if(h=="")
        alert("Enter Your Details");
    else
    {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showStartLocation);
        else
            alert("Geolocation is not supported in your browser");
    }
}

function showStartLocation(position)
{
    var current_date = new Date();
    start_hour=current_date.getUTCHours();
    start_minute=current_date.getUTCMinutes();
    start_second=current_date.getUTCSeconds();
    
    var start_latitude=position.coords.latitude;
    var start_longititude=position.coords.longitude;
    start_location.push(start_latitude);
    start_location.push(start_longititude);
    start_latitude*=(Math.PI / 180);
    start_longititude*=(Math.PI / 180);
    start_location_r.push(start_latitude);
    start_location_r.push(start_longititude);
    is_start_clicked=true;
}

function getStopLocation()
{
    var h=getHeight();
    if(h=="")
        alert("Enter Your Details");
    else if(is_start_clicked==false)
        alert("Press the start button first");
    else
    {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(showStopLocation);
        else
            alert("Geolocation is not supported in your browser");
    }
}

function showStopLocation(position)
{
    var current_date = new Date();
    var stop_hour = current_date.getUTCHours();
    var stop_minute = current_date.getUTCMinutes();
    var stop_second = current_date.getUTCSeconds();

    document.getElementById('glowh').innerHTML=stop_hour-start_hour;
    document.getElementById('glowm').innerHTML=stop_minute-start_minute;
    document.getElementById('glows').innerHTML=stop_second-start_second;
    var stop_latitude=position.coords.latitude;
    var stop_longititude=position.coords.longitude;
    stop_location.push(stop_latitude);
    stop_location.push(stop_longititude);
    stop_latitude*=(Math.PI / 180);
    stop_longititude*=(Math.PI / 180);
    stop_location_r.push(stop_latitude);
    stop_location_r.push(stop_longititude);
    is_stop_clicked=true;
    showAnswer();
}

function Distance_travelled()
{
    const R=6371e3;
    var lat_diff=(stop_location[0]-start_location[0])*(Math.PI / 180);
    var long_diff=(stop_location[1]-start_location[1])*(Math.PI / 180);
    var a=Math.pow(Math.sin(lat_diff/2),2)+Math.cos(start_location_r[0])*Math.cos(stop_location_r[0])*Math.pow(Math.sin(long_diff/2),2);
    var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    var distance=R*c;
    return distance;
}

function No_of_steps()
{
    var d=Distance_travelled();
    distance=d;
    var h=getHeight();
    if(h==NaN)
        alert("Enter Your height in the Enter Details button");
    else
    {
        var den=0.42*h;
        var steps=Math.floor(d/den);
        return steps;
    }
}
function showAnswer()
{
    if(is_start_clicked==true && is_stop_clicked==true)
    {
        steps=No_of_steps();
        document.getElementById("glow").innerHTML=steps;
        document.getElementById("glowingd").innerHTML=distance;       
    }
    else
    {
        alert("Press the stop button");
    }

}


function plot()
{
    var h=getHeight();
    if(h=="")
        alert("Enter Your Details");
    else if(is_start_clicked==false)
        alert("Press The Start Button");
    else if(is_stop_clicked==false)
        alert("Press The Stop Button");
    else if(is_displayed==0)
    {
        is_displayed=1;
        var map = new ol.Map({
            target: 'map',
            layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
            ],
            view: new ol.View({
            center: ol.proj.fromLonLat([79.9864, 23.1815]),
            zoom: 4
            }),
    
        });
        var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([start_location[1], start_location[0]]))
                })
            ]
        })
        });
        map.addLayer(layer);
        
        var layer1 = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([stop_location[1],stop_location[0]]))
                    })
                ]
            })
        });
        map.addLayer(layer1);
    }
}