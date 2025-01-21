export class HomePage {
    private readonly searchBar = '[title="Search"]';
    private readonly link = (link) => `[href="${link}"]`

    public inputSearch(searchParam:string){
        cy.get(this.searchBar).clear().type(searchParam+"{enter}")
    }
    public visit(){
        cy.visit('/')
    }
    public validateLink(link:string){
        cy.get(this.link(link)).should('be.visible')
    }
}