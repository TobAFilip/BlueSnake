let wordlist = {
    en: {
        login: {
            login_title: "Login",
            login_form_username: "Username",
            login_form_password: "Password",
            login_form_submit: "Submit"
        },
        register: {
            register_title: "Register",
            register_form_username: "Username",
            register_form_name: "Name",
            register_form_email: "Email",
            register_form_email_example: "Exam. alexsmith@gmail.com",
            register_form_password: "Password",
            register_form_submit: "Submit"
        },
        navbar: {
            brand: "BlueSnake",
            home_link: "Home",
            about_link: "About",
            login_link: "Login",
            register_link: "Register"
        },
        about: {
            heading: "About Us",
            about_us_text: "Blue snake is a social media network for scuba divers to share their diving adventures " +
                "and to meet new new people with same interests"

        },
    }
}

let lang = "en";

let selectedWordlist;

switch (lang) {
    case "en": selectedWordlist = wordlist.en;
}

export let getSelectedWordlist = () => {
    return selectedWordlist;
}