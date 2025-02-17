document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const targetId = this.getAttribute("data-target"); 
            const section = document.getElementById(targetId);
            if (section) {
                section.style.display = this.checked ? "block" : "none";
            }          
        });
    });
});



function getArticle(articleClass) {
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    const article = document.getElementById(articleClass);
    if (article) {
        const anyChecked = Array.from(article.querySelectorAll("input[type='checkbox']")).some(checkbox => checkbox.checked);
        article.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
            const targetId = checkbox.getAttribute("data-target");
            const section = document.getElementById(targetId);            
            if (section) {
                if (anyChecked) {
                    checkbox.checked = false;
                    section.style.display = "none";
                } else {
                    checkbox.checked = true;
                    section.style.display = "block";
                }
            }
        });
    }
}

function searchSections() {
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".content").forEach(section => {
        section.style.display = "none";
    });
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

/*function toggleSections(listId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(el => {
        if (el.id !== listId) {
            el.style.display = "none"; 
        }
    });

    const list = document.getElementById(listId);
    if (list) {
        list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    }
}*/

function showHelp(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function showContact(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function showAbout(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.setProperty('display', 'block');
    }
}

function showHome(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HelpPage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Feedback").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function showFeedback(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    document.querySelectorAll(".HomePage").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function validateForm() {
    alert("Submission Received. Thank you!");
    window.location.href = "/";
    return false; 
}
