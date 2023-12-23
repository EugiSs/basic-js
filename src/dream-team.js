const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!members) return false

	let result = []
	Array.from(members).filter((name) => {
		if (typeof name === "string") {
			let firstLetter = name.trim().charAt(0).toUpperCase()
			result.push(firstLetter)
		}
	})

	return result.length ? result.sort().join("") : false
}

module.exports = {
	createDreamTeam
}
