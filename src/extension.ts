import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Cat integration enabled.');

	let meow = vscode.commands.registerCommand('vs-cat.meow', () => {
		vscode.window.showInformationMessage('VS Cat says: meow');
	});
	context.subscriptions.push(meow);

	let feed = vscode.commands.registerCommand('vs-cat.feed', () => {
		vscode.window.showInformationMessage('You fed the VS Cat.');
		vscode.window.showInformationMessage('VS Cat enjoyed the food!');
	});
	context.subscriptions.push(feed);
}

export function deactivate() {console.log('Cat integration disabled! D:');}