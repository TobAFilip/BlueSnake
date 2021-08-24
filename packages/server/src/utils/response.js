export class Response {
    constructor(error, res) {
        this.error = [error];
        this.res = res;
    }
}