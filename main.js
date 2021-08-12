function preload()
{
    the_untold_story = "the untold story.mp3";
    music = "music.mp3";
}

function setup()
{
    var canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is laoded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    image(video, 0, 0, 450, 450);
}