cocossd = "";
status = "";

function setup()
{
    canvas = createCanva(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.position(350, 400);
    background("red");
}

function start()
{
    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    textbox = document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model Initialized");
    status = true;
}

function draw()
{
    image(video, 0, 0, 500, 500);
}