import './my-api'
import {MyAPI, getMyAPI} from './my-api'
import * as sinon from 'sinon'

describe('My API', function() {
    let server : sinon.SinonFakeServer ;

    beforeEach(()=>{
        server = sinon.fakeServer.create();
    });

    afterEach(()=>{
        server.restore();
    });

    it('should request server api/info', function(done) {
        server.respondWith("GET", "api/info",
            [200, { "Content-Type": "application/json" },
                '{ "id": 12, "info": "Hey there" }']);

        const api = getMyAPI();

        api.getInfo().then((response)=>{
            assert.equal(response.info,"Hey there");
            done()
        }).catch((err)=>{
            done(err);
        });
        server.respond();
    });
});