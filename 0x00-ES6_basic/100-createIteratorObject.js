export default function createIterator(report) {
  let everyEmployee = [];
  const employees = Object.values(report.allEmployees);
  for (const item of employees) {
    everyEmployee = everyEmployee.concat(item);
  }

  return everyEmployee[Symbol.iterator]();
}
