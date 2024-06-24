// describe('zoo api test', () => {
//   const baseUrl = `https://petstore.swagger.io/v2`;
//   it('Создание пользователя', () => {
//     cy.request({
//       method: `POST`,
//       url: `${baseUrl}/user`,
//       body: {
//         "id": 1,
//         "username": "Mark",
//         "firstName": "Mark",
//         "lastName": "Tven",
//         "email": "mark@mail.ru",
//         "password": "m533",
//         "phone": "89005335353",
//         "userStatus": 0
//       }
//       }).then((response) => {
//         expect(response.status).be.eql(200)
//       })
//     })
    // cy.request({
    //   method: `DELETE`,
    //   url: `${baseUrl}/user`,
    //   body: {
    //     "id": 1,
    //     "username": "Mark",
    //     "firstName": "Mark",
    //     "lastName": "Tven",
    //     "email": "mark@mail.ru",
    //     "password": "m533",
    //     "phone": "89005335353",
    //     "userStatus": 0
    //   }
    //  }).then((response) => {
    //   expect(response.status).be.eql(200)
    // })
  // })

import users from '../fixtures/users.json'

describe(`swagger petstore`, () => {
it(`create user`, () => {
cy.createUser(users.user1)
.then((response) => {
expect(response.status).be.eql(200);

    cy.getUser(users.user1.username, true)
      .then((response) => {
        expect(response.status).be.eql(200);
        expect(response.body).be.eqls(users.user1);
      })
  })
})
it(`update user`, () => {
cy.createUser(users.user2)
.then((response) => {
expect(response.status).be.eql(200);

    cy.request('PUT', `/user/${users.user2.username}`, users.user3)
      .then((response) => {
        expect(response.status).be.eql(200);
        cy.getUser(users.user3.username, true)
        .then((response) => {
          expect(response.status).be.eql(200);
          expect(response.body).be.eqls(users.user3);
        })
      })
  })
})
it(`delete user`, () => {
cy.createUser(users.user4)
.then((response) => {
expect(response.status).be.eql(200);

    cy.request('DELETE', `/user/${users.user4.username}`)
      .then((response) => {
        expect(response.status).be.eql(200);
        cy.getUser(users.user4.username, false)
        .then((response) => {
          expect(response.status).be.eql(404);
        })
      })
    })
  })
})



  
  