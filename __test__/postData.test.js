import { TestScheduler } from 'jest';
import 'regenerator-runtime/runtime';
import 'babel-polyfill';
import { postData } from '../src/client/js/postData';
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('Test postData function', () => {
    test('The postData function test', async () => {
        fetch.mockResolvedValue(
            {
            status: 
                { code: '0', msg: 'OK', credits: '1', remaining_credits: '19863' }
        })
        expect(postData('/process',{URL:'false', currentInput:"The quick brown fox jumped over the lazy dog"})).toBeDefined();
    })
})
