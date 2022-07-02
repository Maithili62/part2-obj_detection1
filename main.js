img = "";   
img1 = ""; 
img2 = ""; 
img3 = ""; 
img4 = ""; 
img5 = ""; 
status1 = "";
status2 = "";
status3 = "";
status4 = "";
status5 = "";
status6 = "";
objects = [];
objects1 = [];
objects2 = [];
objects3 = [];
objects4 = [];
objects5 = [];

function preload()
{
  img = loadImage("bedroom1.jpg");
  img1 = loadImage("bottles.jpg");
  img2 = loadImage("dining-hall.jpg");
  img3 = loadImage("desk.jpg");
  img4 = loadImage("fruit-basket.jpg");
  img5 = loadImage("tv.jpg");
}

function setup()
{
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
document.getElementById("status1").innerHTML = "Status : Detecting Objects";
document.getElementById("status2").innerHTML = "Status : Detecting Objects";
document.getElementById("status3").innerHTML = "Status : Detecting Objects";
document.getElementById("status4").innerHTML = "Status : Detecting Objects";
document.getElementById("status5").innerHTML = "Status : Detecting Objects";
}


function modelLoaded()
{
console.log("Model Loaded !");
status1 = true;
status2 = true;
status3 = true;
status4 = true;
status5 = true;
status6 = true;
objectDetector.detect(img , gotResult);
objectDetector.detect(img1 , gotResult);
objectDetector.detect(img2 , gotResult);
objectDetector.detect(img3 , gotResult);
objectDetector.detect(img4 , gotResult);
objectDetector.detect(img5 , gotResult);
}

function draw()
{

if (status1 != "")
{
    for (i=0; i<objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percentage + "%" , objects[i].x + 15 , objects[i].y + 15);
        stroke("#000000");
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }
}

if (status2 != "")
{
    for (i=0; i<objects1.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects1[i].confidence * 100);
        text(objects1[i].label + " " + percentage + "%" , objects1[i].x + 15 , objects1[i].y + 15);
        stroke("#000000");
        rect(objects1[i].x , objects1[i].y , objects1[i].width , objects1[i].height);
    }
}

if (status3 != "")
{
    for (i=0; i<objects2.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects2[i].confidence * 100);
        text(objects2[i].label + " " + percentage + "%" , objects2[i].x + 15 , objects2[i].y + 15);
        stroke("#000000");
        rect(objects2[i].x , objects2[i].y , objects2[i].width , objects2[i].height);
    }
}

if (status4 != "")
{
    for (i=0; i<objects3.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects3[i].confidence * 100);
        text(objects3[i].label + " " + percentage + "%" , objects3[i].x + 15 , objects3[i].y + 15);
        stroke("#000000");
        rect(objects3[i].x , objects3[i].y , objects3[i].width , objects3[i].height);
    }
}

if (status5 != "")
{
    for (i=0; i<objects4.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects4[i].confidence * 100);
        text(objects4[i].label + " " + percentage + "%" , objects4[i].x + 15 , objects4[i].y + 15);
        stroke("#000000");
        rect(objects4[i].x , objects4[i].y , objects4[i].width , objects4[i].height);
    }
}

if (status6 != "")
{
    for (i=0; i<objects5.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        noFill();
        percentage = floor(objects5[i].confidence * 100);
        text(objects5[i].label + " " + percentage + "%" , objects5[i].x + 15 , objects5[i].y + 15);
        stroke("#000000");
        rect(objects5[i].x , objects5[i].y , objects5[i].width , objects5[i].height);
    }
}
}


function gotResult(error , results)
{
if (error)
{
    console.log(error);

}
console.log(results);
objects = results;
objects1 = results;
objects2 = results;
objects3 = results;
objects4 = results;
objects6 = results;
}