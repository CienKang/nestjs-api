import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { loginDto, registerDto } from 'src/dto';
import * as bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.SALT_ROUNDS);

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {
    }

    async login(body: loginDto) {

        const user = await this.prisma.user.findUnique({
            where: {
                email: body.email
            },
            select: {
                id: true,
                name: true,
                email: true,
                location: true,
                hashedPassword: true
            }
        });

        // check if password matches
        if (user) {
            const match = await bcrypt.compare(body.password, user.hashedPassword);
            if (match) {
                return {
                    message: 'Login successful',
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        location: user.location,
                    }
                };
            }
            else return {
                message: 'Invalid credentials'
            };
        }

        else return {
            message: 'User does not exist'
        };

    }

    async register(body: registerDto) {

        // checking if user already exists
        const userExists = await this.prisma.user.findUnique({
            where: {
                email: body.email
            }
        });

        if (userExists) {
            return {
                message: 'User already exists'
            };
        }

        // create a hash of the password and generate a new user
        const hash = await bcrypt.hash(body.password, saltRounds);
        console.log("body: ", body);
        const user = await this.prisma.user.create({
            data: {
                email: body.email,
                hashedPassword: hash,
                name: body.name,
                location: body.location ? body.location : "Not provided"
            },
            select: {
                id: true,
                name: true,
                email: true,
                location: true
            }
        });

        if (user) {
            return {
                message: 'User created successfully',
                user
            };
        }
        else {
            return {
                message: 'User creation failed'
            };
        }

    }

}