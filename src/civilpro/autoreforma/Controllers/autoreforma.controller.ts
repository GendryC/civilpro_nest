import { Controller, Get, UseGuards } from '@nestjs/common';
import { AutoreformaService } from '../Services/autoreforma.service';
import { JwtAuthGuard } from 'src/common/auth/guards/jwt-auth.guard';
import { User } from 'src/common/users/entities/user.entity';
import { Query } from '@nestjs/graphql';

@Controller('autoreforma')
export class AutoreformaController {
    constructor(private readonly service: AutoreformaService) { }

    @Query(() => [User], { name: 'users' })
    @UseGuards(JwtAuthGuard)
    @Get()
    getHello(): string {
        return this.service.index();
    }
}
