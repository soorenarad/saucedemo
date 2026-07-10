export enum UserType {
    STANDARD = "standard_user",
    LOCKED_OUT = "locked_out_user",
    PROBLEM = "problem_user",
    PERFORMANCE_GLITCH = "performance_glitch_user",
    ERROR = "error_user",
    VISUAL = "visual_user",
}

export type User = {
    username: string;
    password: string;
};

export class UserFactory {
    static create(type: UserType): User {
        return {
            username: type,
            password: "secret_sauce",
        };
    }
}