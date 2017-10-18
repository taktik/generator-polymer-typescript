import {<%= projecNameCamelCase %>} from './<%= projecName %>'
import './my-app'
import './test-my-app.html'

declare function fixture<T>(element: string):T

describe('<%= projecName %>', function() {
    it('should be scaffolds with love', function(done) {
        var element = fixture<<%= projecNameCamelCase %>>('BasicTestFixture');
        assert.equal(element.myProperty, 'a module scaffolds with love');
        done()
    });
});
