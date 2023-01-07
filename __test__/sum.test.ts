import { describe, expect, test } from '@jest/globals';

describe('sum module', () => {
  test('add PI equal 3.141592653589793', () => {
    expect(Math.PI).toBe(3.141592653589793);
  });
});
