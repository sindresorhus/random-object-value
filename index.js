export default function randomObjectProperty(object) {
	const keys = Object.keys(object);
	return object[keys[Math.floor(Math.random() * keys.length)]];
}
