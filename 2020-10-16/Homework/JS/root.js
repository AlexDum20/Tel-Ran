import {authPanel,firstName,lastName, submit,reset} from "./fill-forms.js";
import {Student} from "./students.js";

document.querySelector("[divName='wrap']").appendChild(authPanel());

let genders = [...document.querySelectorAll("input[type='radio']")];
let courses = [...document.querySelectorAll("input[type='checkbox']")];

//click button SUBMIT
submit.addEventListener('click', () => {
    let gender = genders.filter(item => item.checked)[0].value;
    let resultCourses = courses.filter(item => item.checked)
        .reduce((acc, elem) => {
            acc.push(elem.value);
            return acc
        }, []);
    console.log(new Student(
        firstName.value,
        lastName.value,
        gender,
        resultCourses
    ));
})

//click button RESET
reset.addEventListener('click', () => {
    firstName.value = '';
    lastName.value = '';
    genders.forEach(item => item.checked = false);
    courses.forEach(item => item.checked = false);
})