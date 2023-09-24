import { IsInt, IsString } from 'class-validator';

class GeneralResponseWrapper<T> {
    @IsInt()
    private responseCode: number;

    @IsString()
    private message: string;

    private date: Date = new Date();
    private data: T | null = null;

    constructor(responseCode: number, message: string, data: T | null) {
        this.responseCode = responseCode;
        this.message = message;
        this.data = data;
    }
}

export default GeneralResponseWrapper;
