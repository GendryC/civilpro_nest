import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoreformaService {
    index(): string {
        return "Ok";
    }
}
