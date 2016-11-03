# Cog Log

![Cog Log Splash Page](http://i.imgur.com/K4vDvNv.png)

## Objective

Cog Log helps doctors and caretakers administer the Mini-Mental State Exam (MMSE) and keep track of its scores. The MMSE has been the most widely used cognitive test for dementia in US clinical practice.  

Dementia is a disorder that is characterized by a decline in cognition involving one or more cognitive domains (learning and memory, language, executive function, complex attention, perceptual-motor, social cognition).  

As the population ages, the overall burden of dementia is increasing worldwide. In the United States in 2012, an estimated 5.2 million individuals over 65 years of age had Alzheimer disease, a number that is expected to reach 6.7 million by 2025.



## Links

Live URL: https://cog-log.herokuapp.com/

GitHub Repository: https://github.com/zjfong/project3


## Technologies Used
* AngularJS, HTML, CSS, JavaScript
* JsonWebToken, Passport, Angular-chart, Angular-flash, Angular Material, Bootstrap
* Heroku

## Installation
```
npm install
```
Set up process.env.JWT_SECRET

## Code Examples

Json Web Token Magic:  
```javascript
jwt.sign(payload, secretOrPrivateKey, options, [callback])
```
- payload - an object with the JWT claims ie. email, gender, locale)
- options - ie. algorithm, expiresIn

```javascript
userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.JWT_SECRET);
};
```


## Future Features
* Doctors add patients that have exams
* Search bar for patients
* Input past exams
* Better user interaction with form



