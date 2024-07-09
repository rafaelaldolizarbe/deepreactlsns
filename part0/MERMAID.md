## Part0 exercises

The exercises 0.1 to 0.3 is about reading, showing everithing about the importance of the complement parts of a vanilla development. Now ahead you will see the exercise 0.4 that is divided in two parts.

### 0.5 SPA Diagram
Below you will see a sequence diagram showing the http request context of a simple application in which notes are saved in a JSON file on the Helsinki Open University server.



````mermaid

sequenceDiagram
title Diagram of sequence representing a rendering site

    participant clientside
    participant webserver

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate webserver
    webserver-->>clientside: STATUS 304 Not Modified <br/> notes.html document 
    deactivate webserver

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate webserver
    webserver-->>clientside: STATUS 304 Not Modified <br/> main.css file 
    deactivate webserver

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate webserver
    webserver-->>clientside:  STATUS 304 Not Modified <br/> main.js file
    deactivate webserver

    Note right of clientside: Executing JavaScript code on the client side that fetches JSON from the server

    clientside->>webserver: GET https://mydomain.exmpl.com/homepage/data.json
    activate webserver
    webserver-->>clientside: STATUS 200 OK <br/> JSON list:[{ "content": "HTML is very easy", "date": "2023-1-1" }, ... ]
    deactivate webserver

    Note right of clientside: Execution of the callback function that renders the notes
    
`````
### 0.6 New Note SPA Diagram
Below you will see a sequence diagram illustrating the POST method of an http request showing what happens when a new note is registered on the site

````mermaid
sequenceDiagram
    participant clientside
    participant webserver

    clientside ->> webserver: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate webserver
    webserver -->> clientside: STATUS 302 Found <br/>event-loop.js file
    deactivate webserver
    Note right of clientside: Execution of the event loop function that renders the pages again, <br/>now with the new line.

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate webserver
    webserver-->>clientside: STATUS 304 Not Modified <br/> notes.html document 
    deactivate webserver

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate webserver
    webserver-->>clientside: STATUS 304 Not Modified <br/> main.css file 
    deactivate webserver

    clientside->>webserver: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate webserver
    webserver-->>clientside:  STATUS 304 Not Modified <br/> main.js file
    deactivate webserver

    Note right of clientside: Executing JavaScript code on the client side that fetches JSON from the server
    clientside->>webserver: GET https://mydomain.exmpl.com/homepage/data.json
    activate webserver
    webserver-->>clientside: STATUS 200 OK <br/> JSON list:[{ "content": "HTML is very easy", "date": "2023-1-1" }, ... ]
    deactivate webserver

    Note right of clientside: Execution of the callback function that renders the notes, <br/>including the new one!

````