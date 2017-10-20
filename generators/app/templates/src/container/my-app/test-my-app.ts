import {<%= projecNameCamelCase %>} from './<%= projecName %>'
import './<%= projecName %>'
import './test-<%= projecName %>.html'

declare function fixture<T>(element: string):T

describe('<%= projecName %>', function() {
    it('should be scaffolds with love', function(done) {
        var element = fixture<<%= projecNameCamelCase %>>('BasicTestFixture');
        assert.equal(element.myProperty, 'an application scaffolds with love');
        done()
    });
});
