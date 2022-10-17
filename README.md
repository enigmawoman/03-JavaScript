# 03-JavaScript: Password Generator
Repository for the week 3 challenge 03-JavaScript

## On the job ticket
```
Presented with a web interface that was supposed to generate a password for the user when they pressed the 'Generate Password' button, however the code to execute this was missing from the javaScript file.
The HTML and CSS was provided and the javaScript file was there with the inital code for the event listener on the button and the function to write the password to the interface. 
The task was to create the code to ask the user what they would like to include in the password and then execute the password generation.
```

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


The main challenge i faced, once the user had selected an option, i.e. to include lowercase charaters, was how to move the lowercase array of charaters into the final array that the generator will randomly choose from. I over came this by researching the correct syntax, and i ended up using the 'array1.forEach(element => console.log(element));', which moved the selected array into the final array.

I hope to optimize further in the future, when i have more knowledge.

```
## Using the code
```
I have been careful to use correct flow and syntax for the JavaScript, and the code is fully commented, so that it can be easily followed and worked on.
```
## Screenshot
```
The following image shows the web application's appearance and functionality:
```
![The Password Generator application displays a red button to "Generate Password".](./Assets/03_javaScript_screenshot.png)

## Link to the deployed application


## License

NA