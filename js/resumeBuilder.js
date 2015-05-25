var formattedName = HTMLheaderName.replace("%data%", "Asim Khanal");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer, Programmer and Hardware Enthusiast");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name" : "Asim Khanal",
	"role" : "Web Developer, Programmer and Hardware Enthusiast",
	"contacts" : {
		"mobile" : "+9779849883318",
		"email" : "asim.khanal@vanderbilt.edu",
		"twitter": "@khanalasim",
		"github" : 'https://github.com/jailorboy/',
		'location': "Kathmandu, Nepal",
		"blog": "pronepali.blogspot.com"
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
var work = {"jobs" : [{
	"employer" : "ScienceTech Club, SXC",
	"title" : "Vice-President",
	"description" : "Organized different seminars, Run different programs, participated in science exhibitions",
	"location" : "Kathmandu",
	"date" : '2012-2014'
}, {
	"employer": "Competitions, Contests",
	"title": "Developer, Programmer and Hardware Enthusiast",
	"description": "Participated in different contests and achieved different prizes/accomplishments",
	"location" : "Kathmandu",
	"date" : "2010-2015"
}]};

var onlineCourses = [{
	"title" : "CS50",
	"school" : "Harvard",
	"url" : "edX.org",
	"date" : 2015
}, {
	"title" : "Intro to CS",
	"school" : "Udacity",
	"url" : "udacity.com",
	"date" : 2014
}, {
	"title" : "JavaScript",
	"school" : "Udacity",
	"url" : "udacity.com",
	"date" : 2015
}]

var education = {
	"schools" : [
	{
		"name" : "Vanderbilt University",
		"location" : "Nashville",
		"major" : "CS",
		"degree" : "Undergraduate",
		"gradYear" : "2015-2019 ",
		"url": "http://vanderbilt.edu"
	}, {
		"name" : "SXC",
		"location" : "Kathmandu",
		"major": "Science",
		"degree" : "HSEB +2",
		"gradYear" : "2012-2014 ",
		"url" : "http://sxc.edu.np"
	}
], "online" : onlineCourses};

var projects = {
	"projects" : [{
	"title": "Tracking and Sensing through Android Robotics",
	"description": "Used OpenCV and Android Programming to ustilize smartphones for Robotics, Won Most Inspirational Award for NASA's International SpaceApps Challenge",
	"url" : "http://www.nasa.gov/feature/nasa-announces-winners-of-2015-international-space-apps-challenge",
	"image" : "http://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/enternasausg.jpg?itok=2OOLproi",
	"date": 2015
}, {
	"title" : "Maps and Articles",
	"description": "Used Google Maps API and RSS feed from Google News to show the local news from different places",
	"url": "https://github.com/jailorboy/Maps",
	"image" : "http://mike.teczno.com/img/google-maps-track.png",
	"date": 2015
}, {
	"title" : "Server in C",
	"description": "Used C to implement a server",
	"url": "https://github.com/jailorboy/Server-in-C",
	"image" : "http://www.keepit.com/sites/www.keepit.com/files/images/server_rack.jpg",
	"date": 2015
}]};

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
	for (each in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var job = HTMLworkEmployer.replace("%data%", work.jobs[each].title) +HTMLworkTitle.replace("%data%",work.jobs[each].employer);
		$(".work-entry:last").append(job);
		var details = HTMLworkDates.replace("%data%", work.jobs[each].date)+HTMLworkLocation.replace("%data%",work.jobs[each].location)
		+HTMLworkDescription.replace("%data%",work.jobs[each].description);
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

//make a method to display projects
projects.display = function(){
	for (each in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[each].title);
		formattedTitle = formattedTitle.replace("#",projects.projects[each].url);
		$("#projects").append(formattedTitle);
		$("#projects").append(HTMLprojectDates.replace("%data%",projects.projects[each].date));
		$("#projects").append(HTMLprojectDescription.replace("%data%",projects.projects[each].description));
		$("#projects").append(HTMLprojectImage.replace("%data%",projects.projects[each].image));
	}
}

//call the display method
projects.display();

//append map
$("#mapDiv").append(googleMap);

//display contacts
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#footerContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

//display biopic
$("#header").prepend(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

//display schools
for (each in education.schools)
{
	$("#education").append(HTMLschoolStart);
	$("#education").append(HTMLschoolName.replace("%data%",education.schools[each].name).replace("#", education.schools[each].url));
	$("#education").append(HTMLschoolDegree.replace("%data%",education.schools[each].degree));
	$("#education").append(HTMLschoolDates.replace("%data%", education.schools[each].gradYear));
	$("#education").append(HTMLschoolLocation.replace('%data%',education.schools[each].location));
	$("#education").append(HTMLschoolMajor.replace("%data%",education.schools[each].major));
}

//online classes
$("#education").append(HTMLonlineClasses);
for (each in education.online)
{
	$("#education").append(HTMLonlineTitle.replace("%data%",education.online[each].title));
	$("#education").append(HTMLonlineSchool.replace("%data%",education.online[each].school));
	$("#education").append(HTMLonlineDates.replace("%data%",education.online[each].date));
	$("#education").append(HTMLonlineURL.replace("%data%",education.online[each].url));

}