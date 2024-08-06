import { expect, test } from '@jest/globals';
import { in_array } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('in_array выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => in_array('needle', false)).toThrow(TypePHPJSError);
    expect(() => in_array('needle', [], 'wrong')).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUskvVrBVSCwqSqzUUPJNTFbSUVDyCwGRnkWZFSDaJzOvtEJJ05qXKzNNQSMzLx6qGCoPNEBTU6Gal0sBCFKTM_IVlC7MvbDhYsfFiRd2K4AVAbXWouvOBVuFXzNIDUgvAA%2C%2C&v=8.2.20
test('in_array проверяет, присутствует ли в массиве значение.', () => {
    expect(in_array('Irix', ['Mac', 'NT', 'Irix', 'Linux'])).toBeTruthy();
    expect(in_array('mac', ['Mac', 'NT', 'Irix', 'Linux'])).toBeFalsy();
});

//https://onlinephp.io?s=s7EvyCjg5eLlUklUsFVILCpKrNRQN9QzNFDXUTA00jMBknqGxprWICWZaQoamXnxMEVAWaAilUQdhZKi0lRNTYVqXi4FIEhNzshXUILIK1zYe2HDhZ0XtlzYCmTtU7jYCCYuNl1suLDvwmYg3qlwYT-Ys-nCViC9CyQUk6cEtLAWw06QU3DbCJKlyD4A&v=8.2.20
test('in_array с параметром strict.', () => {
    expect(in_array('12.4', ['1.10', 12.4, 1.13], true)).toBeFalsy();
    expect(in_array(1.13, ['1.10', 12.4, 1.13], true)).toBeTruthy();
});
