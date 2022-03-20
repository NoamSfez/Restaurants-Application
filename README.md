# Project Description

Implementation of a global Customer Reviews of Products information system (several systems integrated together) with modern Enterprise Architecture patterns to illustrate the Separation of Concerns (SoC) principle.

A portal system allows a customer to manage his product reviews and view other customers' product reviews by consuming a REST API provided by a mediation system.

The mediation system in turn consumes the REST APIs of two independent systems: a Customer Relationship Management (CRM) system, and a Product Information Management (PIM) system.

Different technologies are used to develop the four systems in order to illustrate how REST APIs abstract each system of the other systems' internal technologies.

### Project Technologies

JavaScript ES6, NodeJS, npm, express.js, koa.js, Axios, Java, Spring Boot, Maven, MongoDB, MySQL, REST API, GitHub

# Launch Servers

CRM system run on port 8080 (using MySQL on port 3306).

```bash
$ cd CRM_System
$ mvn -Dmaven.test.skip=true spring-boot:run
```

PIM system run on port 8000.

```bash
$ cd PIM_System
$ nodemon index.js
```

Mediation system run on port 6000.

```bash
$ cd Mediation_System
$ npm start
```
