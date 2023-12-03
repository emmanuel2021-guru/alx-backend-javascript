export default function createReportObject(employeesList) {
  return { allEmployees: { ...employeesList },
	  getNumberOfDepartments() {
	    let count = 0;
	    for (const emp in employeesList) {
	      count += 1;
	    }
	    return count;
	  },
  }
}
