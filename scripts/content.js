
function replaceTextWithStars(){
    console.log("i'm working");
    const classesToSelect = [".user-id", ".nickname", ".username", ".email", 
                            "full-name",".profile-name",".userDetails"];

    const elements = document.querySelectorAll(classesToSelect.join(','));
    
    elements.forEach(element => {
        len = element.textContent.length
        element.textContent = "*".repeat(10)
    })
    
    
    const margins = document.querySelectorAll('[class^="margin"]');
    
    margins.forEach(element => {
        element.style.display = 'none';
    });

    const consoledb = document.querySelectorAll(".page-container.dashboard,.page-content.profile,.page-container.profile-content");
    consoledb.forEach(element => {
        element.style.display = 'none';
    });

}

const observer = new MutationObserver(function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // If new elements are added, replace text with stars
            replaceTextWithStars();
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

replaceTextWithStars();