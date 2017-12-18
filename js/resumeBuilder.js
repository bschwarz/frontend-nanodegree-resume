//======================================================================
// Resume Project for Udacity nanodegree Frontend Web Developer
//======================================================================




// -----------------------------------------
//           Biography    
// -----------------------------------------

var bio = {
  "name" : "Brett Schwarz",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "425-466-1731",
    "email" : "brett.schwarz@gmail.com",
    "github" : "bschwarz",
    "twitter" : "",
    "location" : "Seattle, USA" 
  },
  "welcomeMsg" : "Hi, welcome to my resume.",
  "skills" : ["HTML5","CSS3","JavaScript","jQuery","Ajax","Tcl","C","SQL","MySQL","PostgreSQL","Bootstrap","Git","GitHub"],
  "biopic" : "images/me.jpg",
  display: function() {}
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
  display: function() {}
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
	display: function() {}
};


// -----------------------------------------
//           Projects   
// -----------------------------------------

var projects = {
  "projects" : [
    {
     "title" : "API Studio",
     "dates" : "2017",
     "description" : "Tool to document APIs",
     "images" : [""]
    }
  ],
  display: function() {}
};
