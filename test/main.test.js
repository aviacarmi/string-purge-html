import purgeHtml from '../dist/main.bundle';

describe("purgeHtml without parameters", ()=>{

    test('purge an empty string', () => {
        expect(purgeHtml``).toEqual("");
    });

    test('purge string without HTML tags or parameters', () => {
        expect(purgeHtml`test string`).toEqual("test string");
    });

    test('purge HTML string without parameters', () => {
        expect(purgeHtml`<h1>test string</h1>`).toEqual("test string");
    });
});

describe("purgeHtml with 1 parameter", ()=>{
    
    test('purge HTML string with 1 prameters at the beginning', () => {
        
        const item= "I'm";
        expect(purgeHtml`<h1>${item} a teapot<strong></strong></h1>`).toEqual("I'm a teapot");
    });

    test('purge HTML string with 1 prameter at the middle', () => {
        
        const item= "a";
        expect(purgeHtml`<h1>I'm <strong> ${item} teapot</strong></h1>`).toEqual("I'm a teapot");
    });

    test('purge HTML string with 1 prameters at start to equal string', () => {
        
        const item= "teapot";
        expect(purgeHtml`<h1>I'm <strong>a ${item}</strong></h1>`).toEqual("I'm a teapot");
    });
});

describe("purgeHtml with 2 parameters", ()=>{

    test('purge HTML string with 2 prameters- beginning, middle of the string', () => {
        
        const item1= "I'm";
        const item2= "teapot";
        expect(purgeHtml`<h1>${item1} a<strong> ${item2} teapot2</strong></h1>`).toEqual("I'm a teapot teapot2");
    });

    test('purge HTML string with 2 prameters- beginning, end of the string ', () => {
        
        const item1= "I'm";
        const item2= "teapot";
        expect(purgeHtml`<h1>${item1} a<strong> ${item2}</strong></h1>`).toEqual("I'm a teapot");
    });

    test('purge HTML string with 2 prameters - middle, end of the string', () => {
        
        const item1= "teapot";
        const item2= "teapot2";
        expect(purgeHtml`<h1>I'm a<strong> ${item1} and ${item2}</strong></h1>`).toEqual("I'm a teapot and teapot2");
    });

    test('purge string with 2 prameters- one after eachother without HTML tags', () => {
        
        const item1= "I'm";
        const item2= "teapot";
        expect(purgeHtml`${item1} ${item2}`).toEqual("I'm teapot");
    });

    test('purge HTML string with 2 prameters- one after eachother', () => {
        
        const item1= "a";
        const item2= "teapot";
        expect(purgeHtml`<h1>I'm ${item1} ${item2}</h1>`).toEqual("I'm a teapot");
    });
});

describe("purgeHtml with function parameter", ()=>{

    test('purge string with function parameter without HTML tags', () => {

        const myFunction = () => {
            return 'Returned from myFunction';
        };
        expect(purgeHtml`Function expression in template: ${ myFunction()}`).toEqual("Function expression in template: Returned from myFunction");
    });

    test('purge HTML string with function parameter', () => {

        const myFunction = () => {
            return 'Returned from myFunction';
        };
        expect(purgeHtml`<h1>Function expression in template: ${ myFunction()}</h1>`).toEqual("Function expression in template: Returned from myFunction");
    });

    test('purge HTML string with 2 parameters, function and string', () => {
        
        const item= "1";
        const myFunction = () => {
            return 'Returned from myFunction';
        }; 
        expect(purgeHtml`<h1>Function expression in template: ${ myFunction()} a ${item}</h1>`).toEqual("Function expression in template: Returned from myFunction a 1");
    });
});