

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
        //tabs

    const tabs = document.querySelectorAll(tabsSelector),
          tabContent = document.querySelectorAll(tabsContentSelector),
          tabParent = document.querySelector(tabsParentSelector);

    function hideTabContent(){
        tabContent.forEach(item => {
            item.style.display = 'none'; 
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
        
    }

    function showTabContent(i = 0){
        tabContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((value, i) => {
                if(value == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;