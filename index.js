export default function randomObjectProperty(object) {
	const keys = Object.keys(object);
	return object[keys[Math.floor(Math.random() * keys.length)]];
	const values = Object.values(object);
	return values[Math.floor(Math.random() * values.length)];
}
