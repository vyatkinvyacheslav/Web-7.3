describe('zoo api test', () => {
  const baseUrl = `https://petstore.swagger.io/v2`;
  it('Создание пользователя', () => {
    cy.request({
      method: `POST`,
      url: `${baseUrl}/user`,
      body: {
        "id": 1,
        "username": "Mark",
        "firstName": "Mark",
        "lastName": "Tven",
        "email": "mark@mail.ru",
        "password": "m533",
        "phone": "89005335353",
        "userStatus": 0
      }
      }).then((response) => {
        expect(response.status).be.eql(200)
      })
    })
    cy.request({
      method: `DELETE`,
      url: `${baseUrl}/user`,
      body: {
        "id": 1,
        "username": "Mark",
        "firstName": "Mark",
        "lastName": "Tven",
        "email": "mark@mail.ru",
        "password": "m533",
        "phone": "89005335353",
        "userStatus": 0
      }
     }).then((response) => {
      expect(response.status).be.eql(200)
    })
  })



  
  