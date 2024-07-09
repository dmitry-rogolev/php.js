import { test, expect } from '@jest/globals';
import doubleval from '../../src/variables/doubleval.mjs';

/**
 * https://onlinephp.io?s=s7EvyCjg5eLlSk3OyFdQVzLWMzRRslJQV9BTSMkvTcpJLUvM0YCIagLFlGLylKx5uQA%2C&v=8.3.4
 */
test('doubleval', () => {
    // php "3.14": 3.14
    expect(doubleval('3.14')).toBe(3.14);
});
