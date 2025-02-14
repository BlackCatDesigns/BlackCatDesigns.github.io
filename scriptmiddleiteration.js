function showHome() {
    document.querySelectorAll(".content").forEach(el => el.style.display = "block");
}

function showHelp(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function showContact(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.display = "block";
    }
}

function showAbout(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    let article = document.querySelector(`.${articleClass}`);
    if (article) {
        article.style.setProperty('display', 'block');
    }
}

function getArticle(articleClass) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    const article = document.querySelector(`.${articleClass}`);
    article.style.display = 'block';
    if (article) {
        const sections = article.querySelectorAll('div');
        sections.forEach(section => {
            section.style.setProperty('display', 'block');
        });
    } 
}

function getSection(articleClass,sec) {
    document.querySelectorAll(".content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Help").forEach(el => el.style.display = "none");
    document.querySelectorAll(".Contact").forEach(el => el.style.display = "none");
    document.querySelectorAll(".About").forEach(el => el.style.display = "none");
    const article = document.querySelector(`.${articleClass}`);
    article.style.display = 'block';
    if (article) {
        const sections = article.querySelectorAll('div');
        sections.forEach(section => {
            if(section.classList.contains(sec)){
                section.style.setProperty('display', 'block');
            }
            else{
                section.style.setProperty('display', 'none'); 
            }
        });
    } 

}

function toggleSections(listId) {
    const list = document.getElementById(listId);
    if (list) {
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.setProperty('display','block');
        } else {
            list.style.display = 'none';
        }
    } 
}
