import { Body, Controller, Post, Get, Put, Patch, Delete,  UseInterceptors, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
import { LogInteceptor } from 'src/Interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard,RoleGuard)
@UseInterceptors(LogInteceptor)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}
    
   
    @Roles(Role.Admin)
    @Post()
        async create(@Body() data: CreateUserDTO){
        return this.userService.create(data);
    }

    
    @Roles(Role.Admin)
    @Get ()
    async list(){
        return this.userService.list()
    }

    
    
    @Get(':id')
    async show(@ParamId() id:number) {
        console.log({id});
        return this.userService.show(id);
    }

    
    @Roles(Role.Admin)
    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId()  id:number){
        return this.userService.update(id, data);
    }

    
    @Roles(Role.Admin)
    @Patch(':id')
    async updatePartial(@Body() data:UpdatePatchUserDTO, @ParamId()  id:number){
        return this.userService.updatePartial(id, data);
    }

    
    @Roles(Role.Admin)
    @Delete(':id')
    async delete(@ParamId()  id:number){
    
       return this.userService.delete(id);
    }

}
