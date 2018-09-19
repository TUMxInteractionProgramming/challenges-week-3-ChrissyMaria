//start the action 
console.log("app is alive");

/**
 * Switching the channels will change app-bar and selection 
 * @param {*} channelName 
 */
function SwitchChannel(channelName) {
    //test
    console.log("Tuning into channel, " + channelName);
    //defining variables to store the existing content
    var location = "<a href='http://w3w.co/upgrading.never.helps' target='_blank'> <strong>upgrading.never.helps</strong> </a>";
    var image = "<img onclick='FillStar();' id='star-app-bar' src='http://ip.lfe.mw.tum.de/sections/star.png' alt='starred'>";
    //change content
    document.getElementById('app-bar-chat').innerHTML = channelName + "<small> by " + location + "</small>" + image;
    //change image source
    $('#star-app-bar').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    //change selection
    $('#channels ul li').removeClass('selected');
    $("#channels ul li:contains('"+channelName+"')").addClass('selected');
}

/**
 * To fill the empty star in app bar
 */
function FillStar() {
    $('#star-app-bar').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
}

/**
 * To switch between different tabs 
 * @param {*} current 
 */
function SelectTab(current) {
    $('#tab-bar button').removeClass('selected');
    console.log("Changing to tab "+current); 
    $('#'+current).addClass('selected');
}