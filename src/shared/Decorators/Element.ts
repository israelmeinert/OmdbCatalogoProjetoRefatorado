export default function Element(selector: string) {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return document.querySelector(selector); // Busca o elemento no DOM ao acessar a propriedade
            },
            enumerable: true,
            configurable: true
        });
    };
}
