Webcam.set({
    width:310, 
    height:300, 
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'

    });
}
//checking to see if the ml5 library is working
console.log('ml5.version', ml5.version);
//variable to shorten a line of code
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded()
{
    //seeing when model is loaded
    console.log("Model Loaded")
}

function identify_image()
{
    //variable to shorten line of code
    img = document.getElementById("captured_image");
    //calling a function which has an input of img variable and an output of gotResult function
    classifier.classify(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        //if error it will identify and show
        console.error(error);
    }
    else
    {
        //putting results in the console
        console.log(results);
        //displaying first object name in span tag on html
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}
