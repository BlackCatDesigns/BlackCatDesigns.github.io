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
