const students = [{
    name: "Jay",
    age: 26
}, {
    name: "Ajay",
    age: 31
}];

const resolvers = {
    Query: {
        student: () => students,
        singleStudent: (root, args) => {
            const age = args.age;
            return students.find(students => students.age === age);
        }
    },
};

export default resolvers;
