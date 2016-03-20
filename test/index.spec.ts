///<reference path="../typings/main.d.ts"/>
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

/**
 * Angular2 browserify deps
 */
import "../index";

import {ApplicationRef, platform, Component} from "angular2/core";
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from "angular2/platform/testing/browser";

import * as chai from "chai";
const assert = chai.assert;

describe("TestApp", () => {
    let application: ApplicationRef;
    beforeEach(() => {
        document.body.innerHTML = "<test-app></test-app>";

        application = platform([TEST_BROWSER_PLATFORM_PROVIDERS])
            .application([TEST_BROWSER_APPLICATION_PROVIDERS]);
    });

    it("should be able to bootstrap", () => {
        return application.bootstrap(TestApp, [])
            .then(cmpRef => {
                console.log("boostrapped!");
                assert(!!cmpRef);
            });
    });
});

@Component({
    selector: "test-app",
    template: ``
})
class TestApp {
}