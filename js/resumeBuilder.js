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

var work = [{
	"employer" : "ScienceTech Club, SXC",
	"title" : "Vice-President",
	"description" : "Organized different seminars, Run different programs, participated in science exhibitions"
}, {
	"employer": "Competitions, Contests",
	"title": "Developer, Programmer and Hardware Enthusiast",
	"description": "Participated in different contests and achieved different prizes/accomplishments"
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



