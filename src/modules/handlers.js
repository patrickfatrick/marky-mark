export function inlineHandler (string, indices, mark) {
	let value;
	let useMark = [mark, mark];
	if (string.indexOf(mark) !== -1) {
		for (let index in indices) {
			if (string.lastIndexOf(mark, indices[index]) === indices[index] - mark.length) {
				string = string.substring(0, indices[index] - mark.length) + string.substring(indices[index], string.length);
				if (index == 0) {
					indices[0] = indices[0] - mark.length;
					indices[1] = indices[1] - mark.length;
				} else {
					indices[1] = indices[1] - mark.length;
				}
				useMark[index] = '';
			}
			if (string.indexOf(mark, indices[index]) === indices[index]) {
				string = string.substring(0, indices[index]) + string.substring(indices[index] + mark.length, string.length);
				if (index == 0 && (indices[0] != indices[1])) {
					indices[1] = indices[1] - mark.length;
				}
				useMark[index] = '';
			}
		}
	}
	value = string.substring(0, indices[0]) + useMark[0] + string.substring(indices[0], indices[1]) + useMark[1] + string.substring(indices[1], string.length);
	return {value: value, range: [indices[0] + useMark[0].length, indices[1] + useMark[1].length]};
}

export function blockHandler (string, indices, mark) {
	const start = indices[0];
	const end = indices[1];
	let value;
	var lineStart = string.lineStart(start);
	var lineEnd = string.lineEnd(end);
	if (string.indexOf(mark.trim(), lineStart) === lineStart) {
		value = string.substring(0, lineStart) + string.substring(lineStart + string.substring(lineStart).search(/\b|\n/g), string.length);

		return {value: value, range: [lineStart, lineEnd - mark.length]};
	}
	value = string.substring(0, lineStart) + mark + string.substring(lineStart, string.length);
	return {value: value, range: [start + mark.length, end + mark.length]};
}

export function insertHandler (string, indices, mark) {
	const end = indices[1];
	let value;
	value = string.substring(0, end) + mark + string.substring(end, string.length);

	return {value: value, range: [end, end + mark.length]};
}
