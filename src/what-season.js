const { NotImplementedError } = require("../extensions/index.js")

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!date) return "Unable to determine the time of year!"

	if (isNaN(Date.parse(date))) throw new Error("Invalid date!")
	if (!(date instanceof Date)) throw new Error("Invalid date!")
	// for (let key in date) {
	// 	if (date.hasOwnProperty(key)) throw new Error("Invalid date!")
	// }
	if (Object.getOwnPropertyNames(date).length) throw new Error("Invalid date!")

	const month = date.getMonth(0)
	let season = null

	switch (month) {
		case 0:
		case 1:
		case 11:
			season = "winter"
			break
		case 2:
		case 3:
		case 4:
			season = "spring"
			break
		case 5:
		case 6:
		case 7:
			season = "summer"
			break
		case 8:
		case 9:
		case 10:
			season = "autumn"
			break

		default:
			throw new Error("Invalid date!")
	}

	return season
}

module.exports = {
	getSeason
}
