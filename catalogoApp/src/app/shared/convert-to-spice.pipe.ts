import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'convertToSpice'
})

export class convertToSpicePipe implements PipeTransform{
    transform(value: string, character: string): string{
        return value.replace(character, '');
    }
}
