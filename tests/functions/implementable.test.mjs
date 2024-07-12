import { test, expect } from '@jest/globals';
import Interface from '../../src/contracts/Interface.mjs';
import implementable from '../../src/functions/implementable.mjs';

class Contract1 extends Interface {}
class Contract2 extends Interface {}

class Test {}
implementable(Test);
Test.implements(Contract1, Contract2);

test('implementable', () => {
    expect(Test.__implements).toStrictEqual([Contract1, Contract2]);
});
