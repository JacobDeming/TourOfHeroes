"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Damselfly' },
            { id: 12, name: 'Paragon' },
            { id: 13, name: 'Oathkeeper' },
            { id: 14, name: 'Banshee' },
            { id: 15, name: 'Wasteland' },
            { id: 16, name: 'The Unbreakable Electric Eye' },
            { id: 17, name: 'Speedblitz' },
            { id: 18, name: 'Jupiter Strike' },
            { id: 19, name: 'Pandora' },
            { id: 20, name: 'Ledger' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map