import { describe, test } from 'node:test';
import Markdown from '../src/index.js';

test('Processes the markdown within an HTML block if its just a class wrapper', function(t) {
	const source = '<div>*Bold text*</div>';
	const rendered = Markdown.render(source);
	t.assert.equal(rendered, '<div> <p><em>Bold text</em></p>\n </div>');
});
