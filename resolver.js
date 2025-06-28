const usersData = [
    { id: "1", name: "Alice", age: 25 },
    { id: "2", name: "Bob", age: 30 },
];

// Define your resolvers
const root = {
    hello: () => "Hello, GraphQL with Express!",
    greet: ({ name }) => `Hello, ${name}!`,
    randomNumber: () => Math.floor(Math.random() * 100),
    user: ({ id }) => usersData.find((u) => u.id === id),
    users: () => usersData,
};

module.exports = root;
