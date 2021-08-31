export interface Steps {
    data: Step[];
}

export class Step {
    id: string = '';
    number: number = 0;
    description: string = '';
    previousStep: string = '';
    nextStep: string = '';
    module: string = '';
}