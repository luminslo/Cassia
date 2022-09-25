export class ClientUtil {
	async import(filePath: string): Promise<any> {
		return (await import(filePath))?.default;
	}
}
