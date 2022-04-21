export const parseProps = (stringMap: DOMStringMap): Record<string, any> => {
	const props = Object.assign({}, stringMap);

	Object.keys(props).forEach((key) => {
		if (!key.startsWith('__json_')) return;

		let parsedJson;

		try {
			parsedJson = JSON.parse(props[key]);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(
				`Failed to parse json of props key ${key}. Error: ${e.message}`
			);
		}

		props[key.replace('__json_', '')] = parsedJson;
		delete props[key];
	});

	return props;
};
