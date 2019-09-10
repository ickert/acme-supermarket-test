import basket from '../basket';
import rulesToApply from '../core/rulesToApply';

it('adding FR1 to basket', () => {
    const bt = new basket(rulesToApply);
    bt.add('FR1');
    expect(bt.basketList.filter(item => item === 'FR1').length).toEqual(1)
});

it('show total 0 when basket is empty', () => {
    const bt = new basket(rulesToApply);
    expect(bt.total()).toEqual(0)
});

it('add FR1, SR1, FR1, CF1 and show total equal 19.34', () => {
    const bt = new basket(rulesToApply);
    bt.add('FR1');
    bt.add('SR1');
    bt.add('FR1');
    bt.add('CF1');

    expect(bt.total()).toEqual(19.34)
});

it('add FR1, FR1 and show total equal 3.11', () => {
    const bt = new basket(rulesToApply);
    bt.add('FR1');
    bt.add('FR1');

    expect(bt.total()).toEqual(3.11)
});

it('add SR1, SR1, FR1, SR1 and show total equal 16.61', () => {
    const bt = new basket(rulesToApply);
    bt.add('SR1');
    bt.add('SR1');
    bt.add('FR1');
    bt.add('SR1');

    expect(bt.total()).toEqual(16.61)
});

it('initialize basket with array of products FR1, SR1, FR1, CF1 and show total equal 19.34', () => {
    const bt = new basket(rulesToApply, ['FR1', 'SR1', 'FR1', 'CF1']);
   
    expect(bt.total()).toEqual(19.34)
});

it('add FR1, FR1 and show total equal 3.11 ( rule 3 for one )', () => {
    const newRule = [
        {
            product: 'FR1',
            name: 'xForOne',
            params: {
                x: 3
            }
        }
    ];
    const bt = new basket(newRule);
    bt.add('FR1');
    bt.add('FR1');
    bt.add('FR1');

    expect(bt.total()).toEqual(3.11)
});

it('add SR1, SR1, FR1, SR1, SR1 and show total equal 15.11 (rule new price as 3.00 for 4 or more SR1 items)', () => {
    const newRule = [
        {   
            product: 'SR1',
            name: 'bucketDiscont',
            params: {
                newPrice: 3.00,
                limit: 4
            }
        }
    ];
    const bt = new basket(newRule);
    bt.add('SR1');
    bt.add('FR1');
    bt.add('SR1');
    bt.add('SR1');
    bt.add('SR1');

    expect(bt.total()).toEqual(15.11)
});
