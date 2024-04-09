import { PrismaClient, User } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface CreateUserInterface {
    email: string,
    hashedPassword: string,
    name: string,
    location: string
    bookmarks: {
        create: {
            title: string,
            url: string,
            description?: string
        }[]
    }
}



const data: CreateUserInterface[] = [
    {
        email: 'lMessi@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Lionel Messi',
        location: 'Barcelona',
        bookmarks: {
            create: [
                {
                    title: 'Messi wins 7th Ballon d\'Or',
                    url: 'https://www.bbc.com/sport/football/55269610',
                    description: 'Lionel Messi has won the Ballon d\'Or for a record seventh time, beating Robert Lewandowski and Cristiano Ronaldo to the award.'
                },
                {
                    title: 'Messi\'s 644th goal for Barcelona',
                    url: 'https://www.bbc.com/sport/football/55435845',
                    description: 'Lionel Messi has broken Pele\'s record for the most goals for a single club after scoring his 644th for Barcelona in a 3-0 win against Valladolid.'
                }
            ]
        },
    },
    {
        email: 'CR7@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Cristiano Ronaldo',
        location: 'Turin',
        bookmarks: {
            create: [
                {
                    title: 'Ronaldo scores 700th goal',
                    url: 'https://www.bbc.com/sport/football/49962137',
                    description: 'Cristiano Ronaldo has scored the 700th goal of his career with a penalty against Ukraine.'
                },
                {
                    title: 'Ronaldo wins 5th Ballon d\'Or',
                    url: 'https://www.bbc.com/sport/football/42263218',
                    description: 'Cristiano Ronaldo has won the Ballon d\'Or for the fifth time to move level with Lionel Messi.'
                }
            ]
        }
    },
    {
        email: 'KingKohli@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Virat Kohli',
        location: 'Bangalore',
        bookmarks: {
            create: [
                {
                    title: 'Kohli scores 70th century',
                    url: 'https://www.bbc.com/sport/cricket/55269610'
                },
                {
                    title: 'Kohli scores 10000 runs in ODI',
                    url: 'https://www.bbc.com/sport/cricket/55435845',
                    description: 'Virat Kohli has become the fastest player to score 10,000 runs in one-day internationals, reaching the milestone in just 205 innings.'
                }
            ]
        }
    },
    {
        email: 'SwissFederer@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Roger Federer',
        location: 'Switzerland',
        bookmarks: {
            create: [
                {
                    title: 'Federer wins 20th Grand Slam',
                    url: 'https://www.bbc.com/sport/tennis/49962137',
                    description: 'Roger Federer has won his 20th Grand Slam title, beating Marin Cilic in the Australian Open final.'
                },
                {
                    title: 'Federer wins 8th Wimbledon',
                    url: 'https://www.bbc.com/sport/tennis/42263218'
                }
            ]
        }
    },
    {
        email: 'NadalEspanol@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Rafael Nadal',
        location: 'Spain',
        bookmarks: {
            create: [
                {
                    title: 'Nadal wins 13th French Open',
                    url: 'https://www.bbc.com/sport/tennis/55269610'
                },
                {
                    title: 'Nadal wins 20th Grand Slam',
                    url: 'https://www.bbc.com/sport/tennis/55435845',
                    description: 'Rafael Nadal has equalled Roger Federer\'s record of 20 Grand Slam titles by beating Novak Djokovic in the French Open final.'
                }
            ]
        }
    },
    {
        email: 'SerenTennis@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Serena Williams',
        location: 'USA',
        bookmarks: {
            create: [
                {
                    title: 'Serena wins 23rd Grand Slam',
                    url: 'https://www.bbc.com/sport/tennis/49962137',
                    description: 'Serena Williams has won her 23rd Grand Slam title, beating her sister Venus in the Australian Open final.'
                },
                {
                    title: 'Serena wins 7th Wimbledon',
                    url: 'https://www.bbc.com/sport/tennis/42263218'
                }
            ]
        }
    },
    {
        email: 'RunningBolt@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Usain Bolt',
        location: 'Jamaica',
        bookmarks: {
            create: [
                {
                    title: 'Bolt wins 100m Gold',
                    url: 'https://www.bbc.com/sport/athletics/55269610',
                    description: 'Usain Bolt has won the 100m gold medal at the Olympics for the third time in a row.'
                },
                {
                    title: 'Bolt wins 200m Gold',
                    url: 'https://www.bbc.com/sport/athletics/55435845',
                    description: 'Usain Bolt has won the 200m gold medal at the Olympics for the third time in a row.'
                }
            ]
        }
    },
    {
        email: 'Phelps@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Michael Phelps',
        location: 'USA',
        bookmarks: {
            create: [
                {
                    title: 'Phelps wins 8 Gold Medals',
                    url: 'https://www.bbc.com/sport/swimming/49962137',
                    description: 'Michael Phelps has won 8 gold medals at the Beijing Olympics, breaking the record for the most gold medals won at a single Olympics.'
                },
                {
                    title: 'Phelps wins 23rd Gold Medal',
                    url: 'https://www.bbc.com/sport/swimming/42263218',
                    description: 'Michael Phelps has won his 23rd gold medal at the Rio Olympics, breaking the record for the most gold medals won by an individual.'
                }
            ]
        }
    },
    {
        email: 'Sachin10endular@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'Sachin Tendulkar',
        location: 'Mumbai',
        bookmarks: {
            create: [
                {
                    title: 'Tendulkar scores 100th century',
                    url: 'https://www.bbc.com/sport/cricket/55269610',
                    description: 'Sachin Tendulkar has scored his 100th international century, becoming the first player to reach the milestone.'
                },
                {
                    title: 'Tendulkar scores 200 runs in ODI',
                    url: 'https://www.bbc.com/sport/cricket/55435845',
                    description: 'Sachin Tendulkar has become the first player to score 200 runs in a one-day international.'
                }
            ]
        }
    },
    {
        email: 'LeBron.James@gmail.com',
        hashedPassword: bcrypt.hashSync('password', 10),
        name: 'LeBron James',
        location: 'USA',
        bookmarks: {
            create: [
                {
                    title: 'James wins 4th NBA title',
                    url: 'https://www.bbc.com/sport/basketball/49962137'
                },
                {
                    title: 'James wins 4th NBA MVP',
                    url: 'https://www.bbc.com/sport/basketball/42263218'
                }
            ]
        }
    }

]

// seed the data base with 10 users naming after some of popular sports players along with their bookmarks
async function main() {
    for (const user of data) {
        const newUser = await prisma.user.create({
            data: user
        });
        console.log(`Created user with id: ${newUser.id}`);
    }

    console.log('Seeded the database with 10 users');
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })