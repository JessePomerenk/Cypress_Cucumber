export class FfcPage{
    private readonly url = 'https://foundationfinance.com/';
    private readonly desktopMenu = '[id="ast-desktop-header"] .main-navigation';
    private readonly menuItem =(menuLabel) => `${this.desktopMenu} .menu-item:contains("${menuLabel}")`;
    private readonly submenu= (menuLabel) => `${this.menuItem(menuLabel)} .sub-menu:nth(1)`;
    private readonly menuDropdownItem = (menuDropdownLabel) => `${this.desktopMenu} .menu-link:contains(${menuDropdownLabel})`;
    private readonly careerSteps = '.js-timeline_item';

    public visit(){
        cy.visit(this.url)
    }

    public forceShowSubMenu(menuLabel){
        // none of these work.
        // TODO investigate this lib https://www.npmjs.com/package/cypress-real-events
        // cy.get(this.menuItem(menuLabel)).trigger('onmouseover')
        // cy.get(this.menuItem(menuLabel)).invoke('addClass', ':hover')
        // cy.get(this.menuItem(menuLabel)).trigger('mouseenter')
        // cy.get(this.menuItem(menuLabel)).trigger('mouseover')
        // cy.get(this.menuItem(menuLabel)).rightclick();
        // cy.get(this.menuItem(menuLabel)).invoke('trigger', 'contextmenu')
        // cy.get(this.menuItem(menuLabel)).invoke('hover');
        // cy.get(this.submenu(menuLabel)).invoke('show');

    }

    public clickSubMenuItem(menuLabel, submenuLabel) {
        // this.forceShowSubMenu(menuLabel)
        cy.get(this.menuDropdownItem(submenuLabel)).click({force:true})
        cy.log("hello")
        cy.wait(2000)
    }

    public validateCareerSteps(){
        // cy.url().should('include.text', '/careers-home')
        cy.log("hello")
        cy.wait(2000)
        cy.get(this.careerSteps).should('have.length', 5)
    }

}
