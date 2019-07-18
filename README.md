**Description**

GraphQL API serving data/flows for nicolastudela.com. It will interact with the client-app thorught an Graphql API, allowing the client-app asking for the owner(myself) resume, and other data; Also allowing users to signin/signup/write notes/posts. Also will return data about my Spotify account (most heard songs/albums/ .. etc). 

## Motivation

This server was created mainly to learn and reseach about Apollo Server/GraphQL/Node.js technologies, along with the pourpose of serve data to my personal site. (This data will be pretty much static, but I want also use this as way to show some of my skills.

**The project is still on its early stage** 

## How is it built?

Its an Node.js app, uses an ApolloServer handler, and it will use a MongoDb as storage.

Instead of using the usual Node.js HTTP servers I decided to use ZEIT/Micro Asynchronous HTTP microservices https://github.com/zeit/micro. Which is a veryl light server, and because I wanted to be alligned with Zeit/Now.sh (https://zeit.co/now) ; I n my opinion Now.sh provides a smooth and neat way to deploy severless apps, and you can integrate such easily your proyects with gihub ( doing CI) and more.

## Code style
For now it will be a plain (non-transpiled) app. And just relying only on ES6 features, and using lodash to `merge` (instead of spread operator). Althought I think Now.sh now offers to use Node v10. So I should be possible to use some of the ES2018 support.

## IMPLEMENTATION PLAN
 

### Provide basic data, mostly read only actions  (V1)

Having Basic user/resume/ownerdata filled in to the local db
Basic access to the user/resume/owner data through the API
Being able to sign-in receive access-token and call me 
Being able to deploy app using a live instance of a MongoDB
Includes Secrets in now.sh and internal config
Includes how to create an instance of live-prod MongoDB in the cloud
Calling inits using API to fill user/resume/owner data
Check accessing API from the webapp 


### Connect to Spotify  (V2)

- Connect server throught to spotify and return through the api data of the **owner** 
  - It will enable access to the Spotify API to get the data, will use a Refreshable user authorization flow. Token + Refreshable token.  At the beginning tt won't cache the data into app's storage it will always hit Spotify to retrieve data 
  - Code APIS that will return some info about Top Artists and Tracks *https://developer.spotify.com/documentation/web-api/reference-beta/#category-personalization** .
    
### Mutations for Resume and Users  (V3)

- Finish with all related to CRUD actions on resume and users 

### Notes from my friends / Blog  (V4)

// TODO Not defined yet, but there will be for sure a kind of blog where people can post notes, or thoughts. Whatever. It will be used to show that users could login and post/delete stuff


## APIS STATUS AT 18/07

### USER

#### Queries:

* me (done) (V1)

#### Mutations:

* signIn (inprogress) (V1)

* singUp (inprogress) (V1)

* signOut (V1)

* destroy 

* updatePersonalData 

### RESUME

#### Queries:

* resume() (inprogress)(V1)

#### Mutations:

* resetResume() (inprogress) (V1)

(it will offline-population of the resume data into the db) 

* updateResumeSummary() (V2)

* updateResumeWorkExperiences() (V2)

* updateResumeSkills() (V2) 

### OWNER

This resources will represent some general data of the app/myself 

#### Queries:

* owner()(inprogress) (V1)

(kindof the complete graph!) 


## Tests
// TODO: No tests yet, I think I will test the app using Jest, since I already know it workl :( 
