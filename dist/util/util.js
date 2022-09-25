export class ClientUtil {
    async import(filePath) {
        return (await import(filePath))?.default;
    }
}
