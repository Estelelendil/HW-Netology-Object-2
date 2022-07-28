function specialDestructor(obj) {
  const { special } = obj;
  return special.map(({ description = 'Описание недоступно', ...rest }) => ({ ...rest, description }));
}

export default specialDestructor;
