**Description**

GraphQL API serving data/flows for nicolastudela.com. It will allow users to signin/signup/write notes/posts. Also in next versions will return data about my Spotify account (most heard songs/albums/ .. etc). 

## Motivation

This server was created mainly to learn and reseach about Apollo Server/GraphQL/Node.js technologies, along with the pourpose of serve data to my personal site.

**The project is still on its early stage**

* Current version
 October 2019 => Version 2. See [ImplementationPlan](#IMPLEMENTATION_PLAN)

## How is it built?

Its an Node.js app, uses an ApolloServer handler; Mongoose along with MongoDB as storage.

Instead of using the usual (express/koa) Node.js HTTP server I decided to use ZEIT/Micro Asynchronous HTTP microservices https://github.com/zeit/micro. I choose it because its a light http-server layer and I take advantages of Zeit/Now.sh (https://zeit.co/now) severless sevices; In my opinion Now.sh provides a smooth and neat way to deploy severless apps, and you can integrate such easily your proyects with gihub ( doing CI) and more.

### Why GraphQl (data query language)

* Single URL entry point
* Ability to ask only for needed data ( avoids overfetching )
* Flexibility ( fits better in usecases where data belongs to different entities )
* Declarative Data Fetching ( client selects the data along with its entities with fields across relationships in just one query request, UI-driven data fetching)
* Schema Definition Language: Strongly Typed and Self-documented API. It produces predictable results along with the benefit of being documented (introspection)
* No need to API versioning 
* Disadvantages over REST: 
  - Giving up to: HTTP cache layer, Content-negotiantion (always json)
  - Scaling per entities/resources (microservices) involes more work 

### Apollo server

Apollo-Server implements a spec-compliant GraphQL server which can be queried from any GraphQL client. Which allows you to quickly build a production-ready, self-documenting API for GraphQL clients.

* Automatically generate docs for your schema and query execution with autocomplete. (Introspection + GraphQL Playground)
* Apollo platform is huge and supported for many important companies
* Built-in Features for Metrics and Logging management
* Solution for composing mutitple GraphQL services into single path (Apollo Federation)
  - Helpful for microservices scaling
  - Avoids monolithic GraphQL server wich becomes an unacceptable development bottleneck and single point of failure  

*Mongoose* provides a straight forward solution to model your aplication data. It provides a neat way to casting/validation and provides an easy interface to run db queries.



## Code style
For now it will be a plain (non-transpiled) app. And just relying only on ES6 features, and using some lodash functions like `merge`. Althought Now.sh now offers to run your apps on  Node v10, brings some ES2018 features out-of-the-box. 

## IMPLEMENTATION_PLAN
 

### Provide resume data, admin signin, internal signup (V1)

- Having Basic user/resume/ownerdata filled in to the local db
- Basic access to the user/resume/owner data through the API
- Being able to sign-in receive access-token and call me 
- Being able to deploy app using a live instance of a MongoDB
  - Includes Secrets in now.sh and internal config
  - Includes how to create an instance of live-prod MongoDB in the cloud
  - Calling inits using API to fill user/resume/owner data
  - Check accessing API from the webapp 
- Available queries: Me, resume   

### Mutations (Admin only) (V2)

- Skill and Work_Experience mutations available -> CREATE, REMOVE, UPDATE
- User Sigin (signin) mutation
  

### Connect to Spotify  (V3)

- Connect server throught to spotify and return through the api data of the **owner** 
  - It will enable access to the Spotify API to get the data, will use a Refreshable user authorization flow. Token + Refreshable token.  At the beginning tt won't cache the data into app's storage it will always hit Spotify to retrieve data 
  - Code APIS that will return some info about Top Artists and Tracks *https://developer.spotify.com/documentation/web-api/reference-beta/#category-personalization** .
    
###  Signup/Signin users & Spotify login (V4)

- Email Sign up flow, (won't be verifying email)
- Spotify Signup/login ( think how hard would be to link a user created with an email with its spotify account)
- Think API'S needed and the db/mongoose models to support user/spotify auth    

### Notes from my friends / Blog  (V5)

// TODO Not defined yet, but there will be for sure a kind of blog where people can post notes, or thoughts. Whatever. It will be used to show that users could login and post/delete stuff


## Tests
// TODO: No tests yet, I think I will test the app using Jest.
