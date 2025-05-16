let findTheOldest = function(people) {
	const getAge = function(person) {
		if (!person.yearOfDeath) {
			return new Date().getFullYear() - person.yearOfBirth;
		}

		return person.yearOfDeath - person.yearOfBirth;
	}
	const oldestPerson = people.reduce(
		function (oldest, cVal) {
			if (getAge(oldest) < getAge(cVal)) {
				oldest = cVal;
			}
			return oldest;
	})
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
