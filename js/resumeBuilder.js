//======================================================================
// Resume Project for Udacity nanodegree Frontend Web Developer
//======================================================================




// -----------------------------------------
//           Biography    
// -----------------------------------------

var bio = {
  "name" : "Brett Schwarz",
  "role" : "Engineer",
  "contacts" : {
    "mobile" : "425-466-1731",
    "email" : "brett.schwarz@gmail.com",
    "github" : "bschwarz",
    "twitter" : "",
    "location" : "Seattle, USA" 
  },
  "welcomeMessage" : "Hi, welcome to my resume.",
  "skills" : ["HTML5","CSS3","JavaScript","jQuery","Ajax","Git"],
  "biopic" : "images/me.jpg",
  display: function() {
    // Display name and Role
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // Display Contacts
    for (var contact in bio.contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }

        // Display bio pic
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBioPic);

    // Display Welcome Message
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    // Display Skills if there are any
    if (bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);
      for (var skill =0; skill < bio.skills.length; skill++) {
        var formattedHTMLSkill = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#header").append(formattedHTMLSkill);
      }
    }
  }
};


// -----------------------------------------
//           Education   
// -----------------------------------------

var education = {
  "schools" : [
    {
      "name" : "University of Toledeo",
      "location" : "Toledo, Ohio",
      "degree" : "Bachelor",
      "majors" : ["Electrical Engineering", "Mathematics"],
      "dates" : "1992",
      "url" : "http://www.utoledo.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Development",
      "school" : "Udacity",
      "dates" : "2017",
      "url" : "http://www.udacity.com"
    }
  ],
  display: function() {

    //Display School Info
    for (var school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      for (var major =0; major < education.schools[school].majors.length; major++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }

    //Display Online Classes Info
    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
      $("#education").append(HTMLonlineStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
      $(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      $(".online-entry:last").append(formattedOnlineDates);
      $(".online-entry:last").append(formattedOnlineURL);
    }
  }
};


// -----------------------------------------
//           Work   
// -----------------------------------------

var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Principal System Engineer",
      "location" : "Redmond, WA",
      "dates" : "06/2015 - present",
      "description" : ""
    },
    {
      "employer" : "Sentaca",
      "title" : "Solutions Architect",
      "location" : "Redmond, WA",
      "dates" : "06/2011 - 06/2015",
      "description" : "" 
    },
    {
      "employer" : "Contractor - AT&T",
      "title" : "Senior Test Engineer",
      "location" : "Redmond, WA",
      "dates" : "10/2010 - 06/2011",
      "description" : "" 
    },
    {
      "employer" : "T-Mobile",
      "title" : "Senior Engineer",
      "location" : "Bellevue, WA",
      "dates" : "05/2010 - 10/2010",
      "description" : "" 
    },
    {
      "employer" : "Alcatel-Lucent",
      "title" : "Technical Sales Engineer",
      "location" : "Bellevue, WA",
      "dates" : "08/2008 - 09/2009",
      "description" : ""
    },
    {
      "employer" : "Alcatel-Lucent",
      "title" : "Senior Network Systems Engineer",
      "location" : "Bellevue, WA",
      "dates" : "11/2005 - 08/2008",
      "description" : ""
    
}  ],
	display: function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};


// -----------------------------------------
//           Projects   
// -----------------------------------------

var projects = {
  "projects" : [
    {
     "title" : "API Studio",
     "dates" : "2017",
     "description" : "Tool to document and configure APIs",
     "images" : [""]
    }
  ],
  display: function() {
    for (var project = 0; project < projects.projects.length; project++) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);
      for (var image = 0; image < projects.projects[project].images.length; image++) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};


// display content by calling each display function
bio.display();
education.display();
work.display();
projects.display();


$('#mapDiv').append(googleMap);