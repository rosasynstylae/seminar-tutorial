let data = [
  { id: 'dishes', name: 'Do the Dishes', completed: true },
  { id: 'unicorn', name: 'Pet Unicorn', completed: true },
  { id: 'clean', name: 'Clean Room', completed: false },
  { id: 'setTable', name: 'Set Table', completed: false },
];

const getData = completedType =>
  data.filter(({ completed }) => completed === completedType);

const changeData = (updateId, typeUpdate) => {
  const todo = data.find(({ id }) => id === updateId);

  data = [
    ...data.filter(({ id }) => id !== updateId),
    { ...todo, completed: typeUpdate },
  ];
};

export { getData, changeData };
