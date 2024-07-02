export default function randomObjectValue(object) {
	const values = Object.values(object);
	return values[Math.floor(Math.random() * values.length)];
}
