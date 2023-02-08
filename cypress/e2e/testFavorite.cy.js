describe ("test Favorite", () => {


    it("Successfully adding a book", () => {
        cy.visit('/');
        cy.login("test@test.com", "test");
        cy.upload(
            "The Lord of the Rings",
            "fantasy",
            "J. R. R. Tolkien",
            'lordRing.jpg',
            'lordRing.fb2'
        );
    
        cy.contains('The Lord of the Rings').should("be.visible")
    
    });

    // Проверяем есть ли книга в избранном. Если нет -> добавляем, 
    // если есть удаляем.
    it("add or delete a book from favorites chart 1", () => {
        cy.visit('/');
        cy.login("test@test.com", "test");
        cy.wait(1000);
    
        cy.get('.card-footer > .btn').then((el) => {
            if (el.text().includes('Delete from favorite')) {
                cy.delete();
                cy.get('.btn > a').should('have.text',
                    "Please add some book to favorit on home page!");
            } else {
                cy.add();
                cy.get('.card-title').should('have.text',
                "The Lord of the Rings");
            }
          });
    
    });

    // Обратная проверка первого теста. Если книга первым тестом была удалена из избранного -> 
    // добавляем обратно и наоборот.
    it.only("add or delete a book from favorites chart 2", () => {
        cy.visit('/');
        cy.login("test@test.com", "test");
        cy.wait(1000);
      
        cy.get('.card-footer > .btn').then((el) => {
            if (el.text().includes('Delete from favorite')) {
                cy.delete();
                cy.get('.btn > a').should('have.text',
                    "Please add some book to favorit on home page!");
            } else {
                cy.add();
                cy.get('.card-title').should('have.text',
                "The Lord of the Rings");
            }
          });
      
      });
})