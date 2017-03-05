import { Injectable, EventEmitter } from '@angular/core';

export interface Resource {
    headerText: string;
    allText: string;
    noSelectText: string;
    moreSelectText: string;
}

interface Resources {
    [language: string]: Resource
};

@Injectable()
export class DropdownTreeviewService {
    private language = 'en';
    private resources: Resources = {};
    public languageChange = new EventEmitter<Resource>();

    constructor() {
        this.resources[this.language] = {
            headerText: 'All',
            allText: 'All',
            noSelectText: 'Select options',
            moreSelectText: ' selected'
        };
    }

    getResource(): Resource {
        return this.resources[this.language];
    }

    addLanguageResource(language: string, resource: Resource) {
        this.resources[language] = resource;
    }

    switchLanguage(language: string) {
        this.language = language;
        const resource = this.resources[language];
        this.languageChange.emit(resource);
    }
}
