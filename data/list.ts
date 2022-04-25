export type IAssignmentData = {
    student: string;
    assignment: string;
    dueDate: Date;
}

export const assignmentData: IAssignmentData[] = [
    {
        student: 'Tessa',
        assignment: 'Earth',
        dueDate: new Date('April 25, 2023')
    },
    {
        student: 'Tito',
        assignment: 'Earth',
        dueDate: new Date('April 25, 2023')
    },
    {
        student: 'Tessa',
        assignment: 'Tomatoes',
        dueDate: new Date('June 17, 2023')
    },
    {
        student: 'Alexis',
        assignment: 'Juniper Trees',
        dueDate: new Date('May 17, 2023')
    },
    {
        student: 'Tito',
        assignment: 'Juniper Trees',
        dueDate: new Date('May 17, 2023')
    },
    {
        student: 'Tessa',
        assignment: 'Hobbit Town',
        dueDate: new Date('June 4, 2023')
    },
    {
        student: 'Alexis',
        assignment: 'Island Time',
        dueDate: new Date('March 11, 2023')
    },
    {
        student: 'Tito',
        assignment: 'Peanut Butter',
        dueDate: new Date('April 12, 2023')
    },
];