# CS-465-Full-Stack-Development

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The customer facing application utilized Express and JavaScript to display the website. Within these two, we created routes and controllers that hanlded the requests from the browser for displaying on the page. Express would either retreive the static HTML page or generate the requested page with the handlebars templates we crated, that would bring the data from the database to the application. Angular was also used for a portion of the application to display the admin portal to manage the application. Once the page loads, all of the page content is renderd while the code is executed in the browser. The backend would be called to retreive data from the database. Express uses multiple calls to the server, refreshing the page at each load. The SPA portion will take longer to load, but no subsequent calls will need to be made to the server. 

Why did the backend use a NoSQL MongoDB database?

MongoDB was utilized because of its ease of scaling. Documents that are stored in the database will accommodate the JSON formatting used, which makes it a great choice for frontend applications

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a data format that can be used with a slew of programming languages. JavaScrip is a language that uses JSON to define objects within a project. API's are used in conjunction with JSON to tie together the frontend and backend of the application. JSON sends and receives requests through the RESTFUL API we created. 

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One instance in the full stack process where refactored code improved functionality and efficiencies was to refactor the project with Handelbars templates. These templates allowed us to reuse page structures and easily change the content that's displayed. 

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

HTTP uses four methods; GET, POST, PUT, and DELETE. These are the API endpoints that the client will use to communicate with the server. They're pretty self explanitory where GET would retrieve information, POST would create a new resource, PUT would replace an existing resource with the updated one, and DELETE will remove information. The type of security we used within this project was authenitcating a user through json webtokens proving their login credentials are correct. 

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course taught me quite a bit. I've taken a couple different secure coding classes, but I was able to use it in a real world application with this project. I learned what an SPA is, how to build one, and when it would be a good choice in an application. Despite all the issues I ran into throughout this course, I feel it would be fun to find a career building website applications. 


