var formattedName = HTMLheaderName.replace("%data%", "Asim Khanal");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer, Programmer and Hardware Enthusiast");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name" : "Asim Khanal",
	"role" : "Web Developer, Programmer and Hardware Enthusiast",
	"contact_info" : {
		"mobile" : "+9779849883318",
		"email" : "asim.khanal@vanderbilt.edu",
		"twitter": "@khanalasim",
		"github" : "https://github.com/jailorboy/",
		'location': "Kathmandu, Nepal"
	},
	"welcomeMessage": "Welcome!" ,
	"skills": ["Java", "Python", "Android", "Web", "mySQL"],
	"biopic": "images/biopic.jpg"
}

/**var bioString = '<img class = "img-thumbnail" id = "profile" src = '+bio.biopic+' ><br><dl class = "dl-horizontal" id = "bio"><dt>Name:</dt><dd> '
+ bio.name+ "</dd> <dt> Roles: </dt><dd>"+ bio.role+"</dd><dt>Mobile: </dt><dd>" + bio.contact_info.mobile +"</dd><dt>Email: </dt><dd>" + bio.contact_info.email+"</dd><dt> Twitter: </dt><dd>" 
+ bio.contact_info.twitter+"</dd><dt>Github: </dt><dd>" + bio.contact_info.github+"</dd><dt> Address:</dt><dd> "+bio.contact_info.location+"</dd><dt>Skills: </dt><dd>" 
+ bio.skills.join(", ")+"</dd>";
$("#main").append(bioString);
*/
//define objects for work, education etc.
var work = [{
	"employer" : "ScienceTech Club, SXC",
	"title" : "Vice-President",
	"description" : "Organized different seminars, Run different programs, participated in science exhibitions",
	"city" : "Kathmandu",
	"date" : '2012-2014'
}, {
	"employer": "Competitions, Contests",
	"title": "Developer, Programmer and Hardware Enthusiast",
	"description": "Participated in different contests and achieved different prizes/accomplishments",
	"city" : "Kathmandu",
	"date" : "2010-2015"
}];

var onlineCourses = [{
	"title" : "CS50",
	"school" : "Harvard",
	"url" : "edX.org"
}, {
	"title" : "Intro to CS",
	"school" : "Udacity",
	"url" : "udacity.com"
}, {
	"title" : "JavaScript",
	"school" : "Udacity",
	"url" : "udacity.com"
}]

var education = [
	{
		"name" : "Vanderbilt University",
		"city" : "Nashville",
		"major" : "CS",
		"gradYear" : 2019
	}, {
		"name" : "SXC",
		"city" : "Kathmandu",
		"major": "+2 Science",
		"gradYear" : 2014
	}, onlineCourses
];

var projects = [{
	"title": "Tracking and Sensing through Android Robotics",
	"description": "Used OpenCV and Android Programming to ustilize smartphones for Robotics, Won Most Inspirational Award for NASA's International SpaceApps Challenge",
	"url" : "http://www.nasa.gov/feature/nasa-announces-winners-of-2015-international-space-apps-challenge",
	"image" : "http://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/enternasausg.jpg?itok=2OOLproi"
}, {
	"title" : "Maps and Articles",
	"description": "Used Google Maps API and RSS feed from Google News to show the local news from different places",
	"url": "https://github.com/jailorboy/Maps",
	"image" : "http://mike.teczno.com/img/google-maps-track.png"
}];

//check if there's skills or not
if (bio.hasOwnProperty("skills"))
{
	$("#header").append(HTMLskillsStart);
	for (var i =0; i < bio.skills.length; i++){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
}

/**
  *A function to display all the works
  */
function displayWork()
{
	for (each in work)
	{
		$("#workExperience").append(HTMLworkStart);
		var job = HTMLworkEmployer.replace("%data%", work[each].title) +HTMLworkTitle.replace("%data%",work[each].employer);
		$(".work-entry:last").append(job);
		var details = HTMLworkDates.replace("%data%", work[each].date)+HTMLworkLocation.replace("%data%",work[each].city)
		+HTMLworkDescription.replace("%data%",work[each].description);
		$(".work-entry:last").append(details);
	}
}

//display work
displayWork();

//log clicks
$(document).click(function(loc){
	logClicks(event.pageX, event.pageY);
});

//add an internationalize button
$("#main").append(internationalizeButton);

/**
  *return an international version of the name
  */
function inName(name)
{
		var nameArray = name.split(" ");
		nameArray[0] = nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
		nameArray[1] = nameArray[1].toUpperCase();
		return nameArray.join(" ");
	
}
