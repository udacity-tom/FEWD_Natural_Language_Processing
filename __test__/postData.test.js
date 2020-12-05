import { TestScheduler } from 'jest';
import { postData } from '../src/client/js/postData';
// import { babel-polyfill };

const postDataURL = 'http://localhost:8081'

test('The postData function test', async () => {
    const response = await postData("/process",{URL:'false', currentInput:"The quick brown fox jumped over the lazy dog"});
    expect(response.status.code).toBe('0');
})