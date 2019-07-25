var faker = require('faker');

module.exports = () => {
  const data = { users: [], posts: [] }
  // Create 10 users
  for (let i = 0; i < 10; i++) {
    data.users.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email()
    })
  }

  // Create 50 posts
  for (let i = 0; i < 50; i++) {
    data.posts.push({
      id: faker.random.number(),
      title: faker.name.title(),
      author: faker.name.findName()
    })
  }
  return data
}
