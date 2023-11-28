
/**tabs logik
 */

const tabsContentItems = document.querySelectorAll('.tabs__item-js'),
  tabsButtons = document.querySelectorAll('.tabs__btn-js')
lastBreadcrumb = document.querySelector('.breadcrumbs__end-js');


  initialTabs();

  function initialTabs() {
    hideAllTabs(tabsContentItems);
    showTabsById(0, tabsContentItems);
    disactiveButtons(tabsButtons);
    addedActiveClassToBtn(tabsButtons, 0);
  }

  function updateBreadcrumbText(breadcrumb, updatedText) {
    breadcrumb.innerHTML = updatedText;
  }

  function hideAllTabs(tabsArray) {
    tabsArray.forEach(tabs => {
      tabs.classList.add('hide');
      tabs.classList.remove('show');
    });
  }

  function showTabsById(id, tabsArray) {
    tabsArray[id].classList.remove('hide')
    tabsArray[id].classList.add('show');
  }

  function disactiveButtons(buttonsArray) {
    buttonsArray.forEach(button => {
      button.classList.remove('tabs__btn--active')
    })
  }

  function addedActiveClassToBtn(buttonsArray, id) {
    buttonsArray[id].classList.add('tabs__btn--active');
  }

  function toFirsrLetterUpperCase(text) {
    let newText = text.trim();
    const capitalize = newText => newText.charAt(0).toUpperCase() + newText.slice(1);
    return capitalize(newText);
  }

  tabsButtons.forEach((tabs, id) => {
    tabs.addEventListener('click', (e) => {
      e.preventDefault();
      hideAllTabs(tabsContentItems);
      showTabsById(id, tabsContentItems);

      disactiveButtons(tabsButtons);
      addedActiveClassToBtn(tabsButtons, id);

      let buttonText = tabs.textContent;

      buttonText = toFirsrLetterUpperCase(buttonText);

      updateBreadcrumbText(lastBreadcrumb, buttonText)
    });
  });

