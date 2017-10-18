import {MyModule} from './my-module'
import './my-module'
import './test-my-module.html'

declare function fixture<T>(element: string):T

describe('My module', function() {
    it('should be a sub module', function(done) {
        var element = fixture<MyModule>('BasicTest2Fixture');
        assert.equal(element.myProperty, 'a sub module');
        done()
    });
});