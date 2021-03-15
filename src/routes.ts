import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Gui",
        duration: 5
    });

    CreateCourseService.execute({
        name: "ReactJs",
        educator: "Eduardo"
    });


    return response.send();
}