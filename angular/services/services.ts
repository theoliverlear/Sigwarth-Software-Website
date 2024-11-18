import {SwipeService} from "./swipe.service";
import {HashPasswordService} from "./hash-password.service";
import {ErrorHandlerService} from "./error-handler.service";

export const services: any[] = [
    ErrorHandlerService,
    HashPasswordService,
    SwipeService
];