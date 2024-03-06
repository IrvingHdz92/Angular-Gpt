import { Injectable } from '@angular/core';
import { orthographyUseCase, prosConsUseCase } from '@use-cases/index';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OpenAiService {
    
    checkOrthography( prompt: string ) {
        return from (orthographyUseCase( prompt ));
    }

    checkProsCons( promp: string) {
        return from ( prosConsUseCase( promp ));
    }
    
}