export function useInputChange(stateSetter) {
  return function (event) {
    const name = event.target.name;
    stateSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };
}
