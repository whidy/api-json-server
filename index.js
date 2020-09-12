const faker = require("faker");
const uuidv1 = require('uuid/v1');
module.exports = () => {
  const data = { user:null, users: [], posts: [] };
  // fake login user info
  data.user = {
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    mobile: faker.phone.phoneNumber(),
    role: faker.random.number({
      min: 1,
      max: 100
    })
  };

  // Create 10 users
  for (let i = 0; i < 10; i++) {
    data.users.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email()
    });
  }

  // Create 50 posts
  for (let i = 0; i < 10; i++) {
    data.posts.push({
      // id: faker.random.number(),
      id: i,
      url: uuidv1(),
      title: faker.name.title(),
      author: faker.name.findName(),
      datePublish: faker.date.recent(),
      summary: faker.lorem.sentences()
    });
  }

  // transform data to be a regular formatted api data
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let _data = data[key];
      data[key] = {
        code: 200,
        data: _data,
        msg: "请求成功！"
      };
    }
  }
  return data;
};
