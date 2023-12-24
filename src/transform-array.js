const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform2(arr) {
	if (!Array.isArray(arr))
		throw new Error("'arr' parameter must be an instance of the Array!")

	let result = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "--discard-next") {
			i++
		} else if (arr[i] === "--discard-prev") {
			if (i > 0) {
			}
		} else if (arr[i] === "--double-next") {
		} else if (arr[i] === "--double-prev") {
		} else {
			result.push(arr[i])
		}
	}
}

function transform(arr) {
	if (!Array.isArray(arr))
		throw new Error("'arr' parameter must be an instance of the Array!")
	if (arr.length < 0) return null

	let result = []

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "--discard-next":
				if (i != arr.length - 1) {
					i += 1
				}
				break

			case "--discard-prev":
				if (
					(i != 0 && arr[i - 2] !== "--discard-next") ||
					arr[i - 2] == "--double-next"
				) {
					result.splice(result.length - 1, 1)
				}
				break

			case "--double-next":
				if (i != arr.length - 1) {
					result.push(arr[i + 1])
				}
				break

			case "--double-prev":
				if (i != 0 && arr[i - 2] !== "--discard-next") {
					result.push(result[result.length - 1])
				}
				break

			default:
				result.push(arr[i])
		}
	}

	return result
}

module.exports = {
	transform
}
