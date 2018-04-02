import {<%= projecNameCamelCase %>} from './<%= projecName %>'
import './<%= projecName %>'


describe('<%= projecName %>', function() {
    it('should be scaffolds with love', function(done) {
        var element = new <%= projecNameCamelCase %>();
        assert.equal(element.myProperty, 'an application scaffolds with love');
        done()
    });
});
