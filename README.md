# The Cooper Challenge
### Author  
[Philip Gaunitz](https://github.com/pgaunitz)  
[Blake Erickson](https://github.com/blake-futchi)
## Built with  
**Front End:** React v.16.12.0 
**Back End:** Rails 6.0.2.1   
**Testing frameworks:** Cypress, Enzyme  
**Deployed at:** [Netlify](https://netlify.com/) and [Heroku](https://icanwalk500miles.herokuapp.com/api/v1).

## The code   
This project is the client facing side of our Cooper Test application. Our repositories for the Cooper API built in Rails can be found at the following links for [API](https://github.com/pgaunitz/cooper_api) and [Client](https://github.com/pgaunitz/cooper_client).

## Getting started
### Dependencies  
* Yarn
* React
* Enzyme
* Cypress
* Axios
* Chart.js
* react-chartjs-2 


### Setup   
To test this application, fork the client and api repo to your own GitHub account and clone it to your local workspace. 

Install all of the dependencies:    
```
$ yarn install
```  
Run the unit tests:  
```
$ yarn test
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```


### Exploring the app online or in local host  
Use the following test-credentials to test interaction with the application:  

**Email:** `user@mail.com`  
**Password:** `password`

## Updates/Improvements   
- 
- 
-

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
Material provided by [Craft Academy](https://craftacademy.se).  
