//Alex Ermer
//IT371 - WEB DESIGN AND DEVELOPMENT
//Website Final Project
//February 23, 2025

//Listener routine which controls which content is loaded
//When the user checks a box, the associated section's display goes from
//none to block and vice versa. If one of special pages are loaded they are hidden.
//This also controls the routine for article boxes being checked, if the article box 
//checked, then all the sections in that article are displayed and vice versa.
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "block");
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const targetId = this.getAttribute("data-target");
            const section = document.getElementById(targetId);
            if (section) {
                section.style.display = this.checked ? "block" : "none";
            }
            document.querySelectorAll(".Help, .About, .HomePage, .Contact, .Feedback").forEach(el => el.style.display = "none");;
        });
    });

    document.querySelectorAll("[id^='ArticleCheckbox']").forEach(articleCheckbox => {
        articleCheckbox.addEventListener("change", function () {
            const articleClass = this.getAttribute("data-article");
            handleArticleCheckboxChange(articleClass, this.checked);
            document.querySelectorAll(".Help, .About, .HomePage, .Contact, .Feedback").forEach(el => el.style.display = "none");;
        });
    });

    function handleArticleCheckboxChange(articleClass, isChecked) {
        const article = document.getElementById(articleClass);
        if (article) {
            article.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
                checkbox.checked = isChecked;
                const targetId = checkbox.getAttribute("data-target");
                const section = document.getElementById(targetId);
                if (section) {
                    section.style.display = isChecked ? "block" : "none";
                }
            });
        }
    }
});

//Function to search all the content of the website and if the search string is found
//the section in which is exists is checked and displayed.
function searchSections() {
    document.querySelectorAll(".Help, .About, .HomePage, .Contact, .Feedback").forEach(el => el.style.display = "none");
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".content").forEach(section => {
        section.style.display = "none";
    });
    if (searchText.trim() === "") {
        document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = false;
        });
        return; 
    }

    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        const targetId = checkbox.getAttribute("data-target");
        const section = document.getElementById(targetId);
        if (section && section.textContent.toLowerCase().includes(searchText)) {
            section.style.display = "block";
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

//Function to show and hide the section checkboxes
function toggleSections(listId) {
    const list = document.getElementById(listId);
    if (list) {
        list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    }
}

//Function to display the Help content and hide all other content
function showHelp(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    clearAllSelections()
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

//Function to display the Contact content and hide all other content
function showContact(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    clearAllSelections()
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

//Function to display the About content and hide all other content
function showAbout(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    clearAllSelections()
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.setProperty('display', 'block');
    }
}

//Function to display the homepage and hide all other content
function showHome(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HelpPage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    clearAllSelections()
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

//Function to display the Feedback form and hide all other content
function showFeedback(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    clearAllSelections()
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

//Function to acknowledge a submitted Feedback form and then load the homepage
function validateForm() {
    alert("Submission Received. Thank you!");
    window.location.href = "/";
    return false; 
}

//Function to clear all checked sections
function clearAllSelections() {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none";
    });
}
