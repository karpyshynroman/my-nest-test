import {Body, Controller, Delete, Get, Param, Post, Put, Req, Request} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UsersDTO} from "./users.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {
    }
    @Get()
    getAllUsers(){
        return this.usersService.get()
    }

    @Post()
    createUser(@Req() request: Request, @Body() data: UsersDTO){
        return this.usersService.create(data)
    }

    @Get(':id')
    readUser(@Param('id') id: string){
        return this.usersService.read(id)
    }

    @Put(':id')
    updateUser(@Param('id') id:string,@Body() data: Partial<UsersDTO>){
        return this.usersService.update(id,data)
    }

    @Delete(':id')
    destroyUser(@Param('id') id: string){
        return this.usersService.destroy(id)
    }
}
