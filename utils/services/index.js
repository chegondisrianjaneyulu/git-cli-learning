class Services {
    constructor() {
        if (!this.name) {
            this.name  = 'SRI';
        }
    }

    getName() {
        return this.name
    }
}

module.export.Services = Services