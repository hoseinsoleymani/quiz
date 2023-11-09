const obj = {
    foo: 'bar',
    baz: {
        nested: 'value'
    }
};

const proxy = new Proxy(obj, {
    get: function (target, prop) {
        return "404";
    }
});

console.log(proxy.baz)
console.log(proxy.foo)
